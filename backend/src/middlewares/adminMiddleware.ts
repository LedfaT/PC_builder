import ApiError from "@exeptions/api-error";

import { Request, Response, NextFunction } from "express";

export default function (req: Request, res: Response, next: NextFunction) {
  try {
    if (req.user?.user_role !== "ADMIN") {
      return next(ApiError.Forbidden());
    }
    next();
  } catch (e) {
    return next(ApiError.BadRequest(`problem with admin middleware: ${e}`));
  }
}
