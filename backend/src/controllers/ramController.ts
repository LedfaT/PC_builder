import { ramDependencyTypes } from "@ownTypes/dependencyTypes";
import { RamService } from "@services/ramService";
import { injectable, inject } from "inversify";

@injectable()
export class RamController {
  ramService: RamService;

  constructor(@inject(ramDependencyTypes.RamService) ramService: RamService) {
    this.ramService = ramService;
  }
}
