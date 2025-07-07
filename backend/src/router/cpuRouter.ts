import { container } from "@config/container";
import { CpuController } from "@controllers/cpuController";
import { cpuDependencyTypes } from "@ownTypes/dependencyTypes";
import { Router } from "express";

const cpuRouter = Router();

const cpuController = container.get<CpuController>(
  cpuDependencyTypes.CpuController
);
cpuRouter.post("/", cpuController.createCpu);
cpuRouter.get("/list", cpuController.getAllCpus);
cpuRouter.get("/:id", cpuController.getCpu);
cpuRouter.patch("/:id", cpuController.updateCpu);
cpuRouter.delete("/:id", cpuController.deleteCpu);

export default cpuRouter;
