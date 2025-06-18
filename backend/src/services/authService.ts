import client from "@database/index";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import UserCreateIn from "@models/in/userCreateIn";
import ApiError from "@exeptions/api-error";
import { IUserOut } from "@models/out/userOut";
import { injectable, inject } from "inversify";
import { TokenService } from "./tokenService";
import { userDedpendencyTypes } from "@ownTypes/dependencyTypes";
import { MailService } from "./mailService";
import { User, UserRole } from "@prisma/client";

@injectable()
export class AuthService {
  tokenService: TokenService;
  mailService: MailService;

  constructor(
    @inject(userDedpendencyTypes.TokenService) tokenService: TokenService,
    @inject(userDedpendencyTypes.MailService) mailService: MailService
  ) {
    this.mailService = mailService;
    this.tokenService = tokenService;
  }

  async _generateUserPayload(user: User): Promise<IUserOut> {
    const userDto = new UserCreateIn(user);
    const tokens = this.tokenService.generateToken({ ...userDto });
    console.log(userDto);
    await this.tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: { ...userDto },
    };
  }

  registration = async ({
    email,
    password,
    username,
    user_role,
  }: UserCreateIn) => {
    const candidate = await client.user.findUnique({ where: { email } });
    if (candidate) {
      throw ApiError.BadRequest(`User with email ${email} already exists`);
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuidv4();

    if (!user_role) user_role = UserRole.USER;
    const newUser = await client.user.create({
      data: {
        email,
        username,
        user_role,
        password: hashPassword,
        activationLink,
      },
    });

    // await this.mailService.sendActivationMail(
    //   email,
    //   `${process.env.API_URL}/api/activate/${activationLink}`
    // );

    return this._generateUserPayload(newUser);
  };

  login = async ({ email, password }: UserCreateIn) => {
    const user = await client.user.findUnique({ where: { email } });
    if (!user) {
      throw ApiError.BadRequest(`User with email ${email} not found`);
    }

    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest("Incorrect password");
    }

    return this._generateUserPayload(user);
  };

  async logout(refreshToken: string) {
    const token = await this.tokenService.removeToken(refreshToken);
    return token;
  }

  async activate(activationLink: string) {
    const user = await client.user.findFirst({ where: { activationLink } });
    if (!user) {
      throw ApiError.BadRequest(`Incorrect activation link`);
    }

    await client.user.update({
      where: { id: user.id },
      data: { isActivated: true },
    });
  }
}
