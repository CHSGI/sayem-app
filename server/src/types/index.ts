import { Request } from "express";

export interface AuthPayload {
  userId: string;
  accountType: string;
}

export interface AuthRequest extends Request {
  user?: AuthPayload;
}
