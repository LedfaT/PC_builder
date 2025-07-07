import { Request, Response, NextFunction } from "express";
import { inject, injectable } from "inversify";

import { powerSupplyDependencyTypes } from "@ownTypes/dependencyTypes";
import PowerSupplyCreate, { TPowerSupplyUpdate } from "@models/in/powerSupply";
import PowerSupplyService from "@services/powerSupplyService";

@injectable()
export class PowerSupplyController {
  constructor(
    @inject(powerSupplyDependencyTypes.PowerSupplyService)
    private readonly powerSupplyService: PowerSupplyService
  ) {}

  async createPowerSupply(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const newPowerSupply = new PowerSupplyCreate(req.body);
      await this.powerSupplyService.create(newPowerSupply);
      res.json({ message: "Power supply created" });
    } catch (e) {
      next(e);
    }
  }

  async getPowerSupply(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const powerSupply = await this.powerSupplyService.getPowerSupplyById(+id);
      res.json(powerSupply);
    } catch (e) {
      next(e);
    }
  }

  async updatePowerSupply(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const updateData: TPowerSupplyUpdate = req.body;
      await this.powerSupplyService.update(+id, updateData);
      res.json({ message: "Power supply updated" });
    } catch (e) {
      next(e);
    }
  }

  async deletePowerSupply(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      await this.powerSupplyService.delete(+id);
      res.json({ message: "Power supply deleted successfully" });
    } catch (e) {
      next(e);
    }
  }

  async getAllPowerSupplies(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const powerSupplies = await this.powerSupplyService.getAllPowerSupplies(
        req.query
      );
      res.json(powerSupplies);
    } catch (e) {
      next(e);
    }
  }
}
