import {
  Computer,
  CPU,
  GPU,
  RAM,
  Motherboard,
  PowerSupply,
  Tower,
  HDD,
  SSD,
  WifiModule,
  BluetoothModule,
  CoolingSystem,
  WaterCoolingSystem,
  User,
} from "@prisma/client";

export default class ComputerOut {
  id: number;
  title: string;
  description: string | null;
  image: string | null;
  isPublished: boolean;
  type: string;
  cost: number | null;
  createdAt: Date | null;
  updatedAt: Date | null;

  bluetoothModuleId: number | null;
  towerId: number | null;
  coolingSystemId: number | null;
  cpuId: number | null;
  gpuId: number | null;
  hddId: number | null;
  motherboardId: number | null;
  powersupplyId: number | null;
  ramId: number | null;
  ssdId: number | null;
  waterCoolingSystemId: number | null;
  wifiModuleId: number | null;

  constructor(data: Computer) {
    this.id = data.id;
    this.title = data.title!;
    this.description = data.description;
    this.image = data.image;
    this.isPublished = data.isPublished;
    this.type = data.type;

    this.cost = data.cost;
    this.createdAt = data.createdAt;

    this.bluetoothModuleId = data.bluetoothModuleId;
    this.towerId = data.towerId;
    this.coolingSystemId = data.coolingSystemId;
    this.cpuId = data.cpuId;
    this.gpuId = data.gpuId;
    this.hddId = data.hddId;
    this.motherboardId = data.motherboardId;
    this.powersupplyId = data.powersupplyId;
    this.ramId = data.ramId;
    this.ssdId = data.ssdId;
    this.waterCoolingSystemId = data.waterCoolingSystemId;
    this.wifiModuleId = data.wifiModuleId;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}

type ComputerWithIncludes = Computer & {
  cpu?: CPU | null;
  gpu?: GPU | null;
  ram?: RAM | null;
  motherboard?: Motherboard | null;
  powersupply?: PowerSupply | null;
  tower?: Tower | null;
  hdd?: HDD | null;
  ssd?: SSD | null;
  wifiModule?: WifiModule | null;
  bluetoothModule?: BluetoothModule | null;
  coolingSystem?: CoolingSystem | null;
  waterCoolingSystem?: WaterCoolingSystem | null;
};

export class ComputerAllOut {
  id: number;
  title: string;
  description: string | null;
  image: string | null;
  isPublished: boolean;
  type: string;
  cost: number | null;
  createdAt: Date | null;
  updatedAt: Date | null;

  cpu?: CPU | null;
  gpu?: GPU | null;
  ram?: RAM | null;
  motherboard?: Motherboard | null;
  powersupply?: PowerSupply | null;
  tower?: Tower | null;
  hdd?: HDD | null;
  ssd?: SSD | null;
  wifiModule?: WifiModule | null;
  bluetoothModule?: BluetoothModule | null;
  coolingSystem?: CoolingSystem | null;
  waterCoolingSystem?: WaterCoolingSystem | null;

  constructor(data: ComputerWithIncludes) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.image = data.image;
    this.isPublished = data.isPublished;
    this.type = data.type;

    this.cost = data.cost;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;

    // Связанные объекты
    this.cpu = data.cpu;
    this.gpu = data.gpu;
    this.ram = data.ram;
    this.motherboard = data.motherboard;
    this.powersupply = data.powersupply;
    this.tower = data.tower;
    this.hdd = data.hdd;
    this.ssd = data.ssd;
    this.wifiModule = data.wifiModule;
    this.bluetoothModule = data.bluetoothModule;
    this.coolingSystem = data.coolingSystem;
    this.waterCoolingSystem = data.waterCoolingSystem;
  }
}
