import { Request, Response, NextFunction } from "express";
import { inject, injectable } from "inversify";

import { motherboardDependencyTypes } from "@ownTypes/dependencyTypes";
import MotherboardCreate, { TMotherboardUpdate } from "@models/in/motherboard";
import MotherboardService from "@services/motherboardService";

@injectable()
export class MotherboardController {
  constructor(
    @inject(motherboardDependencyTypes.MotherboardService)
    private readonly motherboardService: MotherboardService
  ) {}

  createMotherboard = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const newMotherboard = new MotherboardCreate(req.body);
      await this.motherboardService.create(newMotherboard);
      res.json({ message: "Motherboard created" });
    } catch (e) {
      next(e);
    }
  };

  getMotherboard = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const motherboard = await this.motherboardService.getMotherboardById(+id);
      res.json(motherboard);
    } catch (e) {
      next(e);
    }
  };

  updateMotherboard = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const updateData: TMotherboardUpdate = req.body;
      await this.motherboardService.update(+id, updateData);
      res.json({ message: "Motherboard updated" });
    } catch (e) {
      next(e);
    }
  };

  deleteMotherboard = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      await this.motherboardService.delete(+id);
      res.json({ message: "Motherboard deleted successfully" });
    } catch (e) {
      next(e);
    }
  };

  getAllMotherboards = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const motherboards = await this.motherboardService.getAllMotherboards(
        req.query
      );
      res.json(motherboards);
    } catch (e) {
      next(e);
    }
  };
}
