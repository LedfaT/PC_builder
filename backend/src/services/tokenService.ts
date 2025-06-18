import client from "@database/index";
import ApiError from "@exeptions/api-error";
import UserCreateIn from "@models/in/userCreateIn";
import { Token } from "@prisma/client";
import { injectable } from "inversify";
import jwt from "jsonwebtoken";

@injectable()
export class TokenService {
  generateToken(payload: UserCreateIn) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET || "", {
      expiresIn: "30d",
    });
    const refreshToken = jwt.sign(
      payload,
      process.env.JWT_REFRESH_SECRET || "",
      {
        expiresIn: "30d",
      }
    );
    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(userId: number, refreshToken: string) {
    const tokenData = await client.token.findUnique({ where: { userId } });

    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return client.token.update({
        where: { userId },
        data: { refreshToken },
      });
    }

    const token = await client.token.create({ data: { userId, refreshToken } });
    return token;
  }

  async removeToken(refreshToken: string) {
    const token = await client.token.findFirst({
      where: { refreshToken },
    });

    const tokenData = await client.token.delete({
      where: { id: token!.id },
    });
    return tokenData;
  }

  validateAccessToken(token: string) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET || "");
      return userData;
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token: string) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET || "");
      return userData;
    } catch (e) {
      return null;
    }
  }

  async findToken(refreshToken: string) {
    const token = await client.token.findFirst({
      where: { refreshToken },
    });
    return token;
  }
}
