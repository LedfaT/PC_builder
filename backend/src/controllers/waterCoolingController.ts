import { Request, Response, NextFunction } from "express";
import { inject, injectable } from "inversify";

import { waterCoolingDependencyTypes } from "@ownTypes/dependencyTypes";
import WaterCoolingSystemCreate, {
  TWaterCoolingSystemUpdate,
} from "@models/in/waterCoolingSystem";
import WaterCoolingService from "@services/waterCoolingService";

@injectable()
export default class WaterCoolingSystemController {
  constructor(
    @inject(waterCoolingDependencyTypes.WaterCoolingService)
    private readonly waterCoolingService: WaterCoolingService
  ) {}

  async createWaterCoolingSystem(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const newWaterCoolingSystem = new WaterCoolingSystemCreate(req.body);
      await this.waterCoolingService.create(newWaterCoolingSystem);
      res.json({ message: "Water cooling system created" });
    } catch (e) {
      next(e);
    }
  }

  async getWaterCoolingSystem(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const waterCoolingSystem =
        await this.waterCoolingService.getWaterCoolingSystemById(+id);
      res.json(waterCoolingSystem);
    } catch (e) {
      next(e);
    }
  }

  async updateWaterCoolingSystem(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const updateData: TWaterCoolingSystemUpdate = req.body;
      await this.waterCoolingService.update(+id, updateData);
      res.json({ message: "Water cooling system updated" });
    } catch (e) {
      next(e);
    }
  }

  async deleteWaterCoolingSystem(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      await this.waterCoolingService.delete(+id);
      res.json({ message: "Water cooling system deleted successfully" });
    } catch (e) {
      next(e);
    }
  }

  async getAllWaterCoolingSystems(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const list = await this.waterCoolingService.getAllWaterCoolingSystems(
        req.query
      );
      res.json(list);
    } catch (e) {
      next(e);
    }
  }
}
