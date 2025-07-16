import { Request, Response, NextFunction } from "express";
import { inject, injectable } from "inversify";

import { gpuDependencyTypes } from "@ownTypes/dependencyTypes";
import GpuCreate, { TGpuUpdate } from "@models/in/gpu";
import GpuService from "@services/gpuService";

@injectable()
export class GpuController {
  constructor(
    @inject(gpuDependencyTypes.GpuService)
    private readonly gpuService: GpuService
  ) {}

  createGpu = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const newGpu = new GpuCreate(req.body);
      await this.gpuService.create(newGpu);
      res.json({ message: "GPU created" });
    } catch (e) {
      next(e);
    }
  };

  getGpu = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const gpu = await this.gpuService.getGpuById(+id);
      res.json(gpu);
    } catch (e) {
      next(e);
    }
  };

  updateGpu = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const updateData: TGpuUpdate = req.body;
      await this.gpuService.update(+id, updateData);
      res.json({ message: "GPU updated" });
    } catch (e) {
      next(e);
    }
  };

  deleteGpu = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      await this.gpuService.delete(+id);
      res.json({ message: "GPU deleted successfully" });
    } catch (e) {
      next(e);
    }
  };

  getAllGpus = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const gpus = await this.gpuService.getAllGpus(req.query);
      res.json(gpus);
    } catch (e) {
      next(e);
    }
  };
}
