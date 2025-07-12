import { Request, Response, NextFunction } from "express";
import { inject, injectable } from "inversify";

import { towerDependencyTypes } from "@ownTypes/dependencyTypes";
import TowerCreate, { TTowerUpdate } from "@models/in/tower";
import TowerService from "@services/towerService";

@injectable()
export class TowerController {
  constructor(
    @inject(towerDependencyTypes.TowerService)
    private readonly towerService: TowerService
  ) {}

  createTower = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const newTower = new TowerCreate(req.body);
      await this.towerService.create(newTower);
      res.json({ message: "Tower created" });
    } catch (e) {
      next(e);
    }
  };

  getTower = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const tower = await this.towerService.getTowerById(+id);
      res.json(tower);
    } catch (e) {
      next(e);
    }
  };

  updateTower = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const updateData: TTowerUpdate = req.body;
      await this.towerService.update(+id, updateData);
      res.json({ message: "Tower updated" });
    } catch (e) {
      next(e);
    }
  };

  deleteTower = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      await this.towerService.delete(+id);
      res.json({ message: "Tower deleted successfully" });
    } catch (e) {
      next(e);
    }
  };

  getAllTowers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const towers = await this.towerService.getAllTowers(req.query);
      res.json(towers);
    } catch (e) {
      next(e);
    }
  };
}
