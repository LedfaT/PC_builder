import { waterCoolingDependencyTypes } from "@ownTypes/dependencyTypes";
import { WaterCoolingService } from "@services/waterCoolingService";
import { inject, injectable } from "inversify";

@injectable()
export class WaterCoolingcontroller {
  waterCoolingService: WaterCoolingService;

  constructor(
    @inject(waterCoolingDependencyTypes.WaterCoolingService)
    waterCoolingService: WaterCoolingService
  ) {
    this.waterCoolingService = waterCoolingService;
  }
}
