import ApiError from "@exeptions/api-error";
import { Request, Response, NextFunction } from "express";

export default function (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ApiError) {
    res.status(err.status).json({ message: err.message, errors: err.errors });
  }

  res.status(500).json({ message: `Unexpected error: ${err}}` });
}
