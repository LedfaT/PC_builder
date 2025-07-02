import { NextFunction, Request, Response } from "express";
import ApiError from "@exeptions/api-error";
import { UserToken } from "@ownTypes/user/userToken";
import TokenService from "@services/tokenService";

declare global {
  namespace Express {
    interface Request {
      user?: UserToken;
    }
  }
}
const tokenService = new TokenService();
const authMiddleware = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return next(ApiError.UnauthorizedError());
    }

    const accessToken = authorizationHeader.split(" ")[1];
    if (!accessToken) {
      return next(ApiError.UnauthorizedError());
    }

    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
      return next(ApiError.UnauthorizedError());
    }

    req.user = userData;
    next();
  } catch (e) {
    return next(ApiError.UnauthorizedError());
  }
};

export default authMiddleware;
