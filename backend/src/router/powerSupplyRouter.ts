import { container } from "@config/container";
import { PowerSupplyController } from "@controllers/powerSupplyController";
import { powerSupplyDependencyTypes } from "@ownTypes/dependencyTypes";
import { Router } from "express";

const powerSupplyRouter = Router();

const powerSupplyController = container.get<PowerSupplyController>(
  powerSupplyDependencyTypes.PowerSupplyController
);
powerSupplyRouter.post("/", powerSupplyController.createPowerSupply);
powerSupplyRouter.get("/list", powerSupplyController.getAllPowerSupplies);
powerSupplyRouter.get("/:id", powerSupplyController.getPowerSupply);
powerSupplyRouter.patch("/:id", powerSupplyController.updatePowerSupply);
powerSupplyRouter.delete("/:id", powerSupplyController.deletePowerSupply);

export default powerSupplyRouter;
