import { container } from "@config/container";
import CoolingSystemController from "@controllers/collingController";
import { coolingDependencyTypes } from "@ownTypes/dependencyTypes";
import { Router } from "express";

const coolingRouter = Router();

const coolingSystemController = container.get<CoolingSystemController>(
  coolingDependencyTypes.CoolingController
);
coolingRouter.post("/", coolingSystemController.createCoolingSystem);
coolingRouter.get("/list", coolingSystemController.getAllCoolingSystems);
coolingRouter.get("/:id", coolingSystemController.getCoolingSystem);
coolingRouter.patch("/:id", coolingSystemController.updateCoolingSystem);
coolingRouter.delete("/:id", coolingSystemController.deleteCoolingSystem);

export default coolingRouter;
