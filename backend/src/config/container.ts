import { Container } from "inversify";

import {
  userDedpendencyTypes,
  cpuDependencyTypes,
} from "@ownTypes/dependencyTypes";
import { AuthService } from "@services/authService";
import { AuthController } from "@controllers/authController";
import { MailService } from "@services/mailService";
import { TokenService } from "@services/tokenService";
import { CpuService } from "@services/cpuService";
import { CpuController } from "@controllers/cpuController";

const container = new Container();

container.bind(userDedpendencyTypes.AuthService).to(AuthService);
container.bind(userDedpendencyTypes.AuthController).to(AuthController);
container.bind(userDedpendencyTypes.MailService).to(MailService);
container.bind(userDedpendencyTypes.TokenService).to(TokenService);

container.bind(cpuDependencyTypes.CpuService).to(CpuService);
container.bind(cpuDependencyTypes.CpuController).to(CpuController);

export { container };
