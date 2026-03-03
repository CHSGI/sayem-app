import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { OAuth2Client } from "google-auth-library";
import { createRemoteJWKSet, jwtVerify } from "jose";
import { AccountType, AuthProvider } from "@prisma/client";
import { prisma } from "../lib/prisma";
import { env } from "../config/env";
import { AppError } from "../middleware/error";
import { AuthPayload } from "../types";

const ACCESS_TOKEN_EXPIRY = "15m";
const REFRESH_TOKEN_EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

const googleClient = new OAuth2Client(env.GOOGLE_CLIENT_ID);
const appleJWKS = createRemoteJWKSet(
  new URL("https://appleid.apple.com/auth/keys"),
);

function generateAccessToken(payload: AuthPayload): string {
  return jwt.sign(payload, env.JWT_ACCESS_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRY,
  });
}

function generateRefreshToken(): string {
  return crypto.randomBytes(40).toString("hex");
}

function mapAccountType(value: string): AccountType {
  if (value === "individual/business") return AccountType.INDIVIDUAL_BUSINESS;
  if (value === "driver") return AccountType.DRIVER;
  throw new AppError(400, "Invalid account type");
}

function accountTypeToString(type: AccountType): string {
  return type === AccountType.DRIVER ? "driver" : "individual/business";
}

async function issueTokens(user: {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  accountType: AccountType;
  isVerified: boolean;
}) {
  const accountType = accountTypeToString(user.accountType);

  const accessToken = generateAccessToken({
    userId: user.id,
    accountType,
  });

  const refreshToken = generateRefreshToken();

  await prisma.refreshToken.create({
    data: {
      token: refreshToken,
      userId: user.id,
      expiresAt: new Date(Date.now() + REFRESH_TOKEN_EXPIRY_MS),
    },
  });

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      accountType,
      isVerified: user.isVerified,
    },
    accessToken,
    refreshToken,
  };
}

export async function registerUser(data: {
  name: string;
  email: string;
  phone: string;
  accountType: string;
  password: string;
}) {
  const existingEmail = await prisma.user.findUnique({
    where: { email: data.email.toLowerCase() },
  });
  if (existingEmail) {
    throw new AppError(409, "Email already registered");
  }

  const existingPhone = await prisma.user.findUnique({
    where: { phone: data.phone },
  });
  if (existingPhone) {
    throw new AppError(409, "Phone number already registered");
  }

  const hashedPassword = await bcrypt.hash(data.password, 12);

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email.toLowerCase(),
      phone: data.phone,
      accountType: mapAccountType(data.accountType),
      password: hashedPassword,
      authProvider: AuthProvider.LOCAL,
    },
  });

  return issueTokens(user);
}

export async function loginUser(data: {
  email: string;
  accountType: string;
  password: string;
}) {
  const user = await prisma.user.findUnique({
    where: { email: data.email.toLowerCase() },
  });

  if (!user || !user.password) {
    throw new AppError(401, "Invalid email or password");
  }

  if (user.authProvider !== AuthProvider.LOCAL) {
    throw new AppError(
      401,
      `This account uses ${user.authProvider.toLowerCase()} sign-in`,
    );
  }

  const accountTypeEnum = mapAccountType(data.accountType);
  if (user.accountType !== accountTypeEnum) {
    throw new AppError(401, "Invalid account type for this user");
  }

  const passwordValid = await bcrypt.compare(data.password, user.password);
  if (!passwordValid) {
    throw new AppError(401, "Invalid email or password");
  }

  return issueTokens(user);
}

export async function googleLogin(data: {
  idToken: string;
  accountType: string;
}) {
  let payload;
  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: data.idToken,
      audience: env.GOOGLE_CLIENT_ID,
    });
    payload = ticket.getPayload();
  } catch {
    throw new AppError(401, "Invalid Google ID token");
  }

  if (!payload || !payload.email) {
    throw new AppError(401, "Google token missing email");
  }

  const accountTypeEnum = mapAccountType(data.accountType);

  let user = await prisma.user.findUnique({
    where: { email: payload.email.toLowerCase() },
  });

  if (user) {
    if (user.authProvider !== AuthProvider.GOOGLE) {
      throw new AppError(
        409,
        `This email is already registered with ${user.authProvider.toLowerCase()} sign-in`,
      );
    }
    if (user.accountType !== accountTypeEnum) {
      throw new AppError(401, "Invalid account type for this user");
    }
  } else {
    user = await prisma.user.create({
      data: {
        name: payload.name || payload.email.split("@")[0],
        email: payload.email.toLowerCase(),
        accountType: accountTypeEnum,
        authProvider: AuthProvider.GOOGLE,
        providerId: payload.sub,
        isVerified: payload.email_verified ?? false,
      },
    });
  }

  return issueTokens(user);
}

export async function appleLogin(data: {
  idToken: string;
  accountType: string;
  fullName?: string;
}) {
  let appleClaims;
  try {
    const { payload } = await jwtVerify(data.idToken, appleJWKS, {
      issuer: "https://appleid.apple.com",
      audience: env.APPLE_BUNDLE_ID,
    });
    appleClaims = payload;
  } catch {
    throw new AppError(401, "Invalid Apple ID token");
  }

  const email = appleClaims.email as string | undefined;
  const sub = appleClaims.sub as string;

  if (!email) {
    throw new AppError(401, "Apple token missing email");
  }

  const accountTypeEnum = mapAccountType(data.accountType);

  let user = await prisma.user.findUnique({
    where: { email: email.toLowerCase() },
  });

  if (user) {
    if (user.authProvider !== AuthProvider.APPLE) {
      throw new AppError(
        409,
        `This email is already registered with ${user.authProvider.toLowerCase()} sign-in`,
      );
    }
    if (user.accountType !== accountTypeEnum) {
      throw new AppError(401, "Invalid account type for this user");
    }
  } else {
    // Apple only sends the name on the first authorization
    const name = data.fullName || email.split("@")[0];
    user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        accountType: accountTypeEnum,
        authProvider: AuthProvider.APPLE,
        providerId: sub,
        isVerified: (appleClaims.email_verified as boolean) ?? false,
      },
    });
  }

  return issueTokens(user);
}

export async function refreshAccessToken(token: string) {
  const stored = await prisma.refreshToken.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!stored || stored.expiresAt < new Date()) {
    if (stored) {
      await prisma.refreshToken.delete({ where: { id: stored.id } });
    }
    throw new AppError(401, "Invalid or expired refresh token");
  }

  const accessToken = generateAccessToken({
    userId: stored.user.id,
    accountType: accountTypeToString(stored.user.accountType),
  });

  return { accessToken };
}

export async function logoutUser(token: string) {
  const stored = await prisma.refreshToken.findUnique({ where: { token } });
  if (stored) {
    await prisma.refreshToken.delete({ where: { id: stored.id } });
  }
}

export async function getProfile(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      accountType: true,
      authProvider: true,
      isVerified: true,
      createdAt: true,
    },
  });

  if (!user) {
    throw new AppError(404, "User not found");
  }

  return {
    ...user,
    accountType: accountTypeToString(user.accountType),
    authProvider: user.authProvider.toLowerCase(),
  };
}
