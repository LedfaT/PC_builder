import client from "@database/index";
import UserCreateIn from "@models/in/userCreateIn";
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
}
