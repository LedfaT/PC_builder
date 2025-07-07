import { container } from "@config/container";
import { MotherboardController } from "@controllers/motherBoardController";
import { motherboardDependencyTypes } from "@ownTypes/dependencyTypes";
import { Router } from "express";

const motherboardRouter = Router();

const motherboardController = container.get<MotherboardController>(
  motherboardDependencyTypes.MotherboardController
);
motherboardRouter.post("/", motherboardController.createMotherboard);
motherboardRouter.get("/list", motherboardController.getAllMotherboards);
motherboardRouter.get("/:id", motherboardController.getMotherboard);
motherboardRouter.patch("/:id", motherboardController.updateMotherboard);
motherboardRouter.delete("/:id", motherboardController.deleteMotherboard);

export default motherboardRouter;
