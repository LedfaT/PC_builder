import { Request, Response, NextFunction } from "express";
import { inject, injectable } from "inversify";

import { coolingDependencyTypes } from "@ownTypes/dependencyTypes";
import CoolingSystemCreate, {
  TCoolingSystemUpdate,
} from "@models/in/coolingSystem";
import CoolingSystemService from "@services/coolingService";

@injectable()
export default class CoolingSystemController {
  constructor(
    @inject(coolingDependencyTypes.CoolingService)
    private readonly coolingSystemService: CoolingSystemService
  ) {}

  createCoolingSystem = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const newCoolingSystem = new CoolingSystemCreate(req.body);
      await this.coolingSystemService.create(newCoolingSystem);
      res.json({ message: "Cooling system created" });
    } catch (e) {
      next(e);
    }
  };

  getCoolingSystem = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const coolingSystem =
        await this.coolingSystemService.getCoolingSystemById(+id);
      res.json(coolingSystem);
    } catch (e) {
      next(e);
    }
  };

  updateCoolingSystem = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const updateData: TCoolingSystemUpdate = req.body;
      await this.coolingSystemService.update(+id, updateData);
      res.json({ message: "Cooling system updated" });
    } catch (e) {
      next(e);
    }
  };

  deleteCoolingSystem = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      await this.coolingSystemService.delete(+id);
      res.json({ message: "Cooling system deleted successfully" });
    } catch (e) {
      next(e);
    }
  };

  getAllCoolingSystems = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const coolingSystems =
        await this.coolingSystemService.getAllCoolingSystems(req.query);
      res.json(coolingSystems);
    } catch (e) {
      next(e);
    }
  };
}
