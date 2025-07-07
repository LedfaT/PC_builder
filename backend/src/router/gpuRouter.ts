import { container } from "@config/container";
import { GpuController } from "@controllers/gpuController";
import { gpuDependencyTypes } from "@ownTypes/dependencyTypes";
import { Router } from "express";

const gpuRouter = Router();

const gpuController = container.get<GpuController>(
  gpuDependencyTypes.GpuController
);
gpuRouter.post("/", gpuController.createGpu);
gpuRouter.get("/list", gpuController.getAllGpus);
gpuRouter.get("/:id", gpuController.getGpu);
gpuRouter.patch("/:id", gpuController.updateGpu);
gpuRouter.delete("/:id", gpuController.deleteGpu);

export default gpuRouter;
