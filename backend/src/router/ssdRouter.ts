import { container } from "@config/container";
import { SsdController } from "@controllers/ssdController";
import { ssdDependencyTypes } from "@ownTypes/dependencyTypes";
import { Router } from "express";

const ssdRouter = Router();

const ssdController = container.get<SsdController>(
  ssdDependencyTypes.SsdController
);
ssdRouter.post("/", ssdController.createSsd);
ssdRouter.get("/list", ssdController.getAllSsds);
ssdRouter.get("/:id", ssdController.getSsd);
ssdRouter.patch("/:id", ssdController.updateSsd);
ssdRouter.delete("/:id", ssdController.deleteSsd);

export default ssdRouter;
