import ApiError from "@exeptions/api-error";
import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export default function (req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(ApiError.BadRequest("Validation error", errors.array()));
  }
  next();
}
