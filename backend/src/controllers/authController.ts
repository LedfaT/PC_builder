import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import ApiError from "@exeptions/api-error";
import { AuthService } from "@services/authService";
import { inject, injectable } from "inversify";
import { userDedpendencyTypes } from "@ownTypes/dependencyTypes";

@injectable()
export class AuthController {
  authService: AuthService;

  constructor(
    @inject(userDedpendencyTypes.AuthService) authService: AuthService
  ) {
    this.authService = authService;
  }

  registration = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest("validation error", errors.array()));
      }

      const userData = await this.authService.registration(req.body);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.json(userData);
    } catch (e) {
      next(e);
    }
  };
}
