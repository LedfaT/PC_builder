import { Request, Response, NextFunction } from "express";
import { inject, injectable } from "inversify";

import { hddDependencyTypes } from "@ownTypes/dependencyTypes";
import HddCreate, { THddUpate } from "@models/in/hdd";
import HddService from "@services/hddService";

@injectable()
export class HddController {
  constructor(
    @inject(hddDependencyTypes.HddService)
    private readonly hddService: HddService
  ) {}

  async createHdd(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const newHdd = new HddCreate(req.body);
      await this.hddService.create(newHdd);
      res.json({ message: "HDD created" });
    } catch (e) {
      next(e);
    }
  }

  async getHdd(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const hdd = await this.hddService.getHddById(+id);
      res.json(hdd);
    } catch (e) {
      next(e);
    }
  }

  async updateHdd(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const updateData: THddUpate = req.body;
      await this.hddService.update(+id, updateData);
      res.json({ message: "HDD updated" });
    } catch (e) {
      next(e);
    }
  }

  async deleteHdd(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      await this.hddService.delete(+id);
      res.json({ message: "HDD deleted successfully" });
    } catch (e) {
      next(e);
    }
  }

  async getAllHdds(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const hdds = await this.hddService.getAllHdds(req.query);
      res.json(hdds);
    } catch (e) {
      next(e);
    }
  }
}
