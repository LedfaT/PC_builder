import { TypeSizeWaterCoolingSystem, WaterCoolingSystem } from "@prisma/client";

export default class WaterCoolingSystemListOut {
  id: number;
  title: string;
  cost: number | null;
  type_size: TypeSizeWaterCoolingSystem;
  heat_removal: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  description: string | null;
  image: string | null;

  constructor(waterCoolingSystem: WaterCoolingSystem) {
    this.id = waterCoolingSystem.id;
    this.cost = waterCoolingSystem.cost;
    this.title = waterCoolingSystem.title;
    this.description = waterCoolingSystem.description;
    this.image = waterCoolingSystem.image;
    this.type_size = waterCoolingSystem.type_size;
    this.heat_removal = waterCoolingSystem.heat_removal;
    this.createdAt = waterCoolingSystem.createdAt;
    this.updatedAt = waterCoolingSystem.updatedAt;
  }
}
