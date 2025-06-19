import { wifiDependencyTypes } from "@ownTypes/dependencyTypes";
import { WifiService } from "@services/wifiService";
import { inject, injectable } from "inversify";

@injectable()
export class WifiController {
  wifiService: WifiService;

  constructor(
    @inject(wifiDependencyTypes.WifiService) wifiService: WifiService
  ) {
    this.wifiService = wifiService;
  }
}
