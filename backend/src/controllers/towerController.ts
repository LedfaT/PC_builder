import { towerDependencyTypes } from "@ownTypes/dependencyTypes";
import { TowerService } from "@services/towerService";
import { inject, injectable } from "inversify";

@injectable()
export class TowerController {
  towerService: TowerService;

  constructor(
    @inject(towerDependencyTypes.TowerService) towerService: TowerService
  ) {
    this.towerService = towerService;
  }
}
