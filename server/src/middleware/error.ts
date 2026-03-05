import { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";

export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string,
  ) {
    super(message);
    this.name = "AppError";
  }
}

const uniqueFieldMessages: Record<string, string> = {
  email: "Email already registered",
  phone: "Phone number already registered",
};

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  if (
    err instanceof Prisma.PrismaClientKnownRequestError &&
    err.code === "P2002"
  ) {
    const target = (err.meta?.target as string[]) ?? [];
    const field = target.find((f) => uniqueFieldMessages[f]);
    const message = field
      ? uniqueFieldMessages[field]
      : "A record with this value already exists";
    return res.status(409).json({ success: false, message });
  }

  if ("type" in err && (err as Record<string, unknown>).type === "entity.parse.failed") {
    return res
      .status(400)
      .json({ success: false, message: "Malformed JSON in request body" });
  }

  console.error("Unhandled error:", err);
  return res.status(500).json({
    success: false,
    message: "Internal server error",
  });
}
