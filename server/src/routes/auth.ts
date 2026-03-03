import { Router } from "express";
import { z } from "zod";
import { validate } from "../middleware/validate";
import { authenticate } from "../middleware/auth";
import * as authController from "../controllers/auth";

const router = Router();

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Invalid phone number"),
  accountType: z.enum(["individual/business", "driver"]),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  accountType: z.enum(["individual/business", "driver"]),
  password: z.string().min(1, "Password is required"),
});

const googleSchema = z.object({
  idToken: z.string().min(1, "Google ID token is required"),
  accountType: z.enum(["individual/business", "driver"]),
});

const appleSchema = z.object({
  idToken: z.string().min(1, "Apple ID token is required"),
  accountType: z.enum(["individual/business", "driver"]),
  fullName: z.string().optional(),
});

const refreshSchema = z.object({
  refreshToken: z.string().min(1, "Refresh token is required"),
});

const logoutSchema = z.object({
  refreshToken: z.string().min(1, "Refresh token is required"),
});

router.post("/register", validate(registerSchema), authController.register);
router.post("/login", validate(loginSchema), authController.login);
router.post("/google", validate(googleSchema), authController.googleSignIn);
router.post("/apple", validate(appleSchema), authController.appleSignIn);
router.post("/refresh", validate(refreshSchema), authController.refresh);
router.post("/logout", validate(logoutSchema), authController.logout);
router.get("/me", authenticate, authController.me);

export default router;
