import { container } from "@config/container";
import { HddController } from "@controllers/hddControlller";
import { hddDependencyTypes } from "@ownTypes/dependencyTypes";
import { Router } from "express";

const hddRouter = Router();

const hddController = container.get<HddController>(
  hddDependencyTypes.HddController
);
hddRouter.post("/", hddController.createHdd);
hddRouter.get("/list", hddController.getAllHdds);
hddRouter.get("/:id", hddController.getHdd);
hddRouter.patch("/:id", hddController.updateHdd);
hddRouter.delete("/:id", hddController.deleteHdd);

export default hddRouter;
