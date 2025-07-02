import { container } from "@config/container";
import { RamController } from "@controllers/ramController";
import { ramDependencyTypes } from "@ownTypes/dependencyTypes";
import { Router } from "express";

const ramRouter = Router();

const ramController = container.get<RamController>(
  ramDependencyTypes.RamController
);
ramRouter.post("/", ramController.createRam);
ramRouter.get("/list", ramController.getAllRams);
ramRouter.get("/:id", ramController.getRam);
ramRouter.patch("/:id", ramController.updateRam);
ramRouter.delete("/:id", ramController.deleteRam);

export default ramRouter;
