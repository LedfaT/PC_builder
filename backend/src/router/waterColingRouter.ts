import { container } from "@config/container";
import { WaterCoolingSystemController } from "@controllers/waterCoolingController";
import { waterCoolingDependencyTypes } from "@ownTypes/dependencyTypes";
import { Router } from "express";

const waterCoolingRouter = Router();

const waterCoolingController = container.get<WaterCoolingSystemController>(
  waterCoolingDependencyTypes.WaterCoolingController
);
waterCoolingRouter.post("/", waterCoolingController.createWaterCoolingSystem);
waterCoolingRouter.get(
  "/list",
  waterCoolingController.getAllWaterCoolingSystems
);
waterCoolingRouter.get("/:id", waterCoolingController.deleteWaterCoolingSystem);
waterCoolingRouter.patch(
  "/:id",
  waterCoolingController.updateWaterCoolingSystem
);
waterCoolingRouter.delete(
  "/:id",
  waterCoolingController.deleteWaterCoolingSystem
);

export default waterCoolingRouter;
