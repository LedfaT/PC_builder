import { TypeSizeWaterCoolingSystem, WaterCoolingSystem } from "@prisma/client";

export default class WaterCoolingSystemCreate {
  title: string;
  cost: number | null;
  type_size: TypeSizeWaterCoolingSystem;
  heat_removal: string;
  description: string | null;
  image: string | null;

  constructor(waterCoolingSystem: WaterCoolingSystem) {
    this.cost = waterCoolingSystem.cost;
    this.title = waterCoolingSystem.title;
    this.description = waterCoolingSystem.description;
    this.image = waterCoolingSystem.image;
    this.type_size = waterCoolingSystem.type_size;
    this.heat_removal = waterCoolingSystem.heat_removal;
  }
}

export type TWaterCoolingSystemUpdate = Partial<WaterCoolingSystemCreate>;
