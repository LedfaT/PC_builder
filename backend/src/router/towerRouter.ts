import { container } from "@config/container";
import { TowerController } from "@controllers/towerController";
import { towerDependencyTypes } from "@ownTypes/dependencyTypes";
import { Router } from "express";

const towerRouter = Router();

const towerController = container.get<TowerController>(
  towerDependencyTypes.TowerController
);
towerRouter.post("/", towerController.createTower);
towerRouter.get("/list", towerController.getAllTowers);
towerRouter.get("/:id", towerController.getTower);
towerRouter.patch("/:id", towerController.updateTower);
towerRouter.delete("/:id", towerController.deleteTower);

export default towerRouter;
