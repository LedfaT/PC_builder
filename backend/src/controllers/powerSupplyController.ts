import { powerSupplyDependencyTypes } from "@ownTypes/dependencyTypes";
import { PowerSupplyService } from "@services/powerSupplyService";
import { inject, injectable } from "inversify";

@injectable()
export class PowerSupplyController {
  powerSupplyService: PowerSupplyService;

  constructor(
    @inject(powerSupplyDependencyTypes.PowerSupplyService)
    powerSupplyService: PowerSupplyService
  ) {
    this.powerSupplyService = powerSupplyService;
  }
}
