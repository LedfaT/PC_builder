import client from "@database/index";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
// import UserDto from "../models/in/userIn";
// import ApiError from "../exeptions/api-error";
// import { IUser } from "@models/user";
import { UserToken } from "@ownTypes/user/userToken";
import { injectable, inject } from "inversify";
import { TokenService } from "./tokenService";
import { userDedpendencyTypes } from "@ownTypes/dependencyTypes";
import { MailService } from "./mailService";

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
}
