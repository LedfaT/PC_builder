import { cpuDependencyTypes } from "@ownTypes/dependencyTypes";
import { CpuService } from "@services/cpuService";
import { inject, injectable } from "inversify";

@injectable()
export class CpuController {
  cpuService: CpuService;

  constructor(@inject(cpuDependencyTypes.CpuService) cpuService: CpuService) {
    this.cpuService = cpuService;
  }
}
