import { ssdDependencyTypes } from "@ownTypes/dependencyTypes";
import { SsdService } from "@services/ssdService";
import { inject, injectable } from "inversify";

@injectable()
export class SsdController {
  ssdService: SsdService;

  constructor(@inject(ssdDependencyTypes.SsdService) ssdService: SsdService) {
    this.ssdService = ssdService;
  }
}
