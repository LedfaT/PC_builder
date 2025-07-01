import { Request, Response, NextFunction } from "express";
import { inject, injectable } from "inversify";

import { cpuDependencyTypes } from "@ownTypes/dependencyTypes";
import CpuCreate, { TCpuUpdate } from "@models/in/cpu";
import CpuService from "@services/cpuService";

@injectable()
export class CpuController {
  constructor(
    @inject(cpuDependencyTypes.CpuService)
    private readonly cpuService: CpuService
  ) {}

  async createCpu(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const newCpu = new CpuCreate(req.body);
      await this.cpuService.create(newCpu);
      res.json({ message: "CPU created" });
    } catch (e) {
      next(e);
    }
  }

  async getCpu(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const cpu = await this.cpuService.getCpuById(+id);
      res.json(cpu);
    } catch (e) {
      next(e);
    }
  }

  async updateCpu(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const updateData: TCpuUpdate = req.body;
      await this.cpuService.update(+id, updateData);
      res.json({ message: "CPU updated" });
    } catch (e) {
      next(e);
    }
  }

  async deleteCpu(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      await this.cpuService.delete(+id);
      res.json({ message: "CPU deleted successfully" });
    } catch (e) {
      next(e);
    }
  }

  async getAllCpus(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const cpus = await this.cpuService.getAllCpus(req.query);
      res.json(cpus);
    } catch (e) {
      next(e);
    }
  }
}
