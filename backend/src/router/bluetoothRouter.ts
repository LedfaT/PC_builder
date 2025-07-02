import { container } from "@config/container";
import { BluetoothModuleController } from "@controllers/buetoothController";
import { bluetoothDependencyTypes } from "@ownTypes/dependencyTypes";
import { Router } from "express";

const bluetoothRouter = Router();

const bluetoothController = container.get<BluetoothModuleController>(
  bluetoothDependencyTypes.BluetoothController
);
bluetoothRouter.post("/", bluetoothController.createBluetoothModule);
bluetoothRouter.get("/list", bluetoothController.getAllBluetoothModules);
bluetoothRouter.get("/:id", bluetoothController.getBluetoothModule);
bluetoothRouter.patch("/:id", bluetoothController.updateBluetoothModule);
bluetoothRouter.delete("/:id", bluetoothController.deleteBluetoothModule);

export default bluetoothRouter;
