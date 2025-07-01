import { Request, Response, NextFunction } from "express";
import { inject, injectable } from "inversify";

import { bluetoothDependencyTypes } from "@ownTypes/dependencyTypes";
import BluetoothService from "@services/bleutoothService";
import BluetoothModuleCreate, {
  TBluetoothModuleUpdate,
} from "@models/in/bluetoothModule";
import ApiError from "@exeptions/api-error";

@injectable()
export class BluetoothModuleController {
  constructor(
    @inject(bluetoothDependencyTypes.BluetoothService)
    private readonly bluetoothService: BluetoothService
  ) {}

  async createBluetoothModule(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const newBluetoothModule = new BluetoothModuleCreate(req.body);
      await this.bluetoothService.create(newBluetoothModule);
      res.json({ message: "Bluetooth module created" });
    } catch (e) {
      next(e);
    }
  }

  async getBluetoothModule(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;

      const bluetoothModule =
        await this.bluetoothService.getBluetoothModuleById(+id);
      res.json(bluetoothModule);
    } catch (e) {
      next(e);
    }
  }

  async updateBluetoothModule(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const updateData: TBluetoothModuleUpdate = req.body;
      await this.bluetoothService.update(+id, updateData);
      res.json({ message: "Bluetooth module updated" });
    } catch (e) {
      next(e);
    }
  }

  async deleteBluetoothModule(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      await this.bluetoothService.delete(+id);
      res.json({ message: "Bluetooth module deleted successfully" });
    } catch (e) {
      next(e);
    }
  }

  async getAllBluetoothModules(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const bluetoothModules =
        await this.bluetoothService.getAllBluetoothModules(req.query);
      res.json(bluetoothModules);
    } catch (e) {
      next(e);
    }
  }
}
