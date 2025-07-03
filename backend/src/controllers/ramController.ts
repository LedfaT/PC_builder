import { Request, Response, NextFunction } from "express";
import { inject, injectable } from "inversify";

import { ramDependencyTypes } from "@ownTypes/dependencyTypes";
import RamCreate, { TRamUpdate } from "@models/in/ram";
import RamService from "@services/ramService";

@injectable()
export class RamController {
  constructor(
    @inject(ramDependencyTypes.RamService)
    private readonly ramService: RamService
  ) {}

  createRam = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const newRam = new RamCreate(req.body);
      await this.ramService.create(newRam);
      res.json({ message: "RAM created" });
    } catch (e) {
      next(e);
    }
  };

  getRam = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const ram = await this.ramService.getRamById(+id);
      res.json(ram);
    } catch (e) {
      next(e);
    }
  };

  updateRam = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const updateData: TRamUpdate = req.body;
      await this.ramService.update(+id, updateData);
      res.json({ message: "RAM updated" });
    } catch (e) {
      next(e);
    }
  };

  deleteRam = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      await this.ramService.delete(+id);
      res.json({ message: "RAM deleted successfully" });
    } catch (e) {
      next(e);
    }
  };

  getAllRams = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const rams = await this.ramService.getAllRams(req.query);
      res.json(rams);
    } catch (e) {
      next(e);
    }
  };
}
