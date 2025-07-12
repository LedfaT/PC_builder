import { Computer } from "@prisma/client";

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

  userId: number | null;
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

    this.userId = data.userId;
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
