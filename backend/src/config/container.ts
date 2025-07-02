import { Container } from "inversify";

import {
  userDedpendencyTypes,
  cpuDependencyTypes,
  gpuDependencyTypes,
  ssdDependencyTypes,
  ramDependencyTypes,
  motherboardDependencyTypes,
  coolingDependencyTypes,
  waterCoolingDependencyTypes,
  powerSupplyDependencyTypes,
  towerDependencyTypes,
  bluetoothDependencyTypes,
  wifiDependencyTypes,
  hddDependencyTypes,
} from "@ownTypes/dependencyTypes";
import { AuthService } from "@services/authService";
import { AuthController } from "@controllers/authController";
import { MailService } from "@services/mailService";
import TokenService from "@services/tokenService";
import CpuService from "@services/cpuService";
import { CpuController } from "@controllers/cpuController";
import GpuService from "@services/gpuService";
import { GpuController } from "@controllers/gpuController";
import SsdService from "@services/ssdService";
import { SsdController } from "@controllers/ssdController";
import { RamController } from "@controllers/ramController";
import RamService from "@services/ramService";
import MotherboardService from "@services/motherboardService";
import { MotherboardController } from "@controllers/motherBoardController";
import CoolingService from "@services/coolingService";
import Coolingcontroller from "@controllers/collingController";
import WaterCoolingService from "@services/waterCoolingService";
import WaterCoolingController from "@controllers/waterCoolingController";
import PowerSupplyService from "@services/powerSupplyService";
import { PowerSupplyController } from "@controllers/powerSupplyController";
import TowerService from "@services/towerService";
import { TowerController } from "@controllers/towerController";
import BluetoothModuleService from "@services/bleutoothService";
import { BluetoothModuleController } from "@controllers/buetoothController";
import WifiModuleService from "@services/wifiService";
import { WifiController } from "@controllers/wifiController";
import { HddController } from "@controllers/hddControlller";
import HddService from "@services/hddService";

const container = new Container();

container.bind(userDedpendencyTypes.AuthService).to(AuthService);
container.bind(userDedpendencyTypes.AuthController).to(AuthController);
container.bind(userDedpendencyTypes.MailService).to(MailService);
container.bind(userDedpendencyTypes.TokenService).to(TokenService);

container.bind(cpuDependencyTypes.CpuService).to(CpuService);
container.bind(cpuDependencyTypes.CpuController).to(CpuController);

container
  .bind(bluetoothDependencyTypes.BluetoothService)
  .to(BluetoothModuleService);
container
  .bind(bluetoothDependencyTypes.BluetoothController)
  .to(BluetoothModuleController);

container.bind(gpuDependencyTypes.GpuService).to(GpuService);
container.bind(gpuDependencyTypes.GpuController).to(GpuController);

container.bind(hddDependencyTypes.HddService).to(HddService);
container.bind(hddDependencyTypes.HddController).to(HddController);

container.bind(wifiDependencyTypes.WifiService).to(WifiModuleService);
container.bind(wifiDependencyTypes.WifiController).to(WifiController);

container.bind(ssdDependencyTypes.SsdService).to(SsdService);
container.bind(ssdDependencyTypes.SsdController).to(SsdController);

container.bind(ramDependencyTypes.RamService).to(RamService);
container.bind(ramDependencyTypes.RamController).to(RamController);

container
  .bind(motherboardDependencyTypes.MotherboardService)
  .to(MotherboardService);
container
  .bind(motherboardDependencyTypes.MotherboardController)
  .to(MotherboardController);

container.bind(coolingDependencyTypes.CoolingService).to(CoolingService);
container.bind(coolingDependencyTypes.CoolingController).to(Coolingcontroller);

container
  .bind(waterCoolingDependencyTypes.WaterCoolingService)
  .to(WaterCoolingService);
container
  .bind(waterCoolingDependencyTypes.WaterCoolingController)
  .to(WaterCoolingController);

container
  .bind(powerSupplyDependencyTypes.PowerSupplyService)
  .to(PowerSupplyService);

container
  .bind(powerSupplyDependencyTypes.PowerSupplyController)
  .to(PowerSupplyController);

container.bind(towerDependencyTypes.TowerService).to(TowerService);
container.bind(towerDependencyTypes.TowerController).to(TowerController);

export { container };
