import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod";

export function validate(schema: ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const messages = err.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        }));
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: messages,
        });
      }
      next(err);
    }
  };
}
