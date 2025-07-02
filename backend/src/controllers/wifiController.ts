import { Request, Response, NextFunction } from "express";
import { inject, injectable } from "inversify";

import { wifiDependencyTypes } from "@ownTypes/dependencyTypes";
import WifiCreate, { TWifiModuleUpdate } from "@models/in/wifiModule";
import WifiService from "@services/wifiService";

@injectable()
export class WifiController {
  constructor(
    @inject(wifiDependencyTypes.WifiService)
    private readonly wifiService: WifiService
  ) {}

  async createWifi(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const newWifi = new WifiCreate(req.body);
      await this.wifiService.create(newWifi);
      res.json({ message: "WiFi created" });
    } catch (e) {
      next(e);
    }
  }

  async getWifi(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const wifi = await this.wifiService.getWifiModuleById(+id);
      res.json(wifi);
    } catch (e) {
      next(e);
    }
  }

  async updateWifi(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const updateData: TWifiModuleUpdate = req.body;
      await this.wifiService.update(+id, updateData);
      res.json({ message: "WiFi updated" });
    } catch (e) {
      next(e);
    }
  }

  async deleteWifi(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      await this.wifiService.delete(+id);
      res.json({ message: "WiFi deleted successfully" });
    } catch (e) {
      next(e);
    }
  }

  async getAllWifis(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const wifis = await this.wifiService.getAllWifiModules(req.query);
      res.json(wifis);
    } catch (e) {
      next(e);
    }
  }
}
