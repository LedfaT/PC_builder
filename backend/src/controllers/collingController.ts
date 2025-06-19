import { coolingDependencyTypes } from "@ownTypes/dependencyTypes";
import { CoolingService } from "@services/coolingService";
import { inject, injectable } from "inversify";

@injectable()
export class Coolingcontroller {
  coolingService: CoolingService;
  constructor(
    @inject(coolingDependencyTypes.CoolingService)
    coolingService: CoolingService
  ) {
    this.coolingService = coolingService;
  }
}
