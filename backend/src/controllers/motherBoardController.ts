import { motherboardDependencyTypes } from "@ownTypes/dependencyTypes";
import { MotherboardService } from "@services/motherboardService";
import { inject, injectable } from "inversify";

@injectable()
export class MotherboardController {
  motherboardService: MotherboardService;

  constructor(
    @inject(motherboardDependencyTypes.MotherboardService)
    motherboardService: MotherboardService
  ) {
    this.motherboardService = motherboardService;
  }
}
