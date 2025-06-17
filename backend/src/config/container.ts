import { Container } from "inversify";

import { userDedpendencyTypes } from "@ownTypes/dependencyTypes";
import { AuthService } from "@services/authService";
import { AuthController } from "@controllers/authController";
import { MailService } from "@services/mailService";
import { TokenService } from "@services/tokenService";

const container = new Container();

container.bind(userDedpendencyTypes.AuthService).to(AuthService);
container.bind(userDedpendencyTypes.AuthController).to(AuthController);
container.bind(userDedpendencyTypes.MailService).to(MailService);
container.bind(userDedpendencyTypes.TokenService).to(TokenService);

export { container };
