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

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData = await this.authService.login(req.body);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.json(userData);
    } catch (e) {
      next(e);
    }
  };

  logout = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { refreshToken } = req.cookies;
      const tokenData = await this.authService.logout(refreshToken);
      res.clearCookie("refreshToken");
      res.json(tokenData);
    } catch (e) {
      next(e);
    }
  };

  activate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const activationLink = req.params.link;
      await this.authService.activate(activationLink);
      return res.redirect(process.env.CLIENT_URL || "http://localhost:3000");
    } catch (e) {
      next(e);
    }
  };
}
