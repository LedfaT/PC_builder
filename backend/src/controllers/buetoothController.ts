import { bluetoothDependencyTypes } from "@ownTypes/dependencyTypes";
import { BluetoothService } from "@services/bleutoothService";
import { inject, injectable } from "inversify";

@injectable()
export class BluetoothController {
  bluetoothService: BluetoothService;

  constructor(
    @inject(bluetoothDependencyTypes.BluetoothService)
    bluetoothService: BluetoothService
  ) {
    this.bluetoothService = bluetoothService;
  }
}
