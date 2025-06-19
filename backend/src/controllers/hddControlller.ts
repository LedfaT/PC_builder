import { hddDependencyTypes } from "@ownTypes/dependencyTypes";
import { HddService } from "@services/hddService";
import { inject, injectable } from "inversify";

@injectable()
export class HddController {
  hddService: HddService;
  constructor(@inject(hddDependencyTypes.HddService) hddService: HddService) {
    this.hddService = hddService;
  }
}
