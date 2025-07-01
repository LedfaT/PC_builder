import { Request, Response, NextFunction } from "express";
import { inject, injectable } from "inversify";

import { ssdDependencyTypes } from "@ownTypes/dependencyTypes";
import SsdCreate, { TSsdUpdate } from "@models/in/ssd";
import SsdService from "@services/ssdService";

@injectable()
export class SsdController {
  constructor(
    @inject(ssdDependencyTypes.SsdService)
    private readonly ssdService: SsdService
  ) {}

  async createSsd(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const newSsd = new SsdCreate(req.body);
      await this.ssdService.create(newSsd);
      res.json({ message: "SSD created" });
    } catch (e) {
      next(e);
    }
  }

  async getSsd(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const ssd = await this.ssdService.getSsdById(+id);
      res.json(ssd);
    } catch (e) {
      next(e);
    }
  }

  async updateSsd(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const updateData: TSsdUpdate = req.body;
      await this.ssdService.update(+id, updateData);
      res.json({ message: "SSD updated" });
    } catch (e) {
      next(e);
    }
  }

  async deleteSsd(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      await this.ssdService.delete(+id);
      res.json({ message: "SSD deleted successfully" });
    } catch (e) {
      next(e);
    }
  }

  async getAllSsds(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const ssds = await this.ssdService.getAllSsds(req.query);
      res.json(ssds);
    } catch (e) {
      next(e);
    }
  }
}
