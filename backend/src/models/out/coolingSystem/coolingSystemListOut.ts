import { CoolingSystem } from "@prisma/client";
import { TypeSizeCoolingSystem } from "@prisma/client";

export default class CoolingSystemListOut {
  id: number;
  title: string;
  heat_removal: string;
  cost: number | null;
  type_size: TypeSizeCoolingSystem;
  createdAt: Date | null;
  updatedAt: Date | null;
  description: string | null;
  image: string | null;
  constructor(CoolingSystem: CoolingSystem) {
    this.id = CoolingSystem.id;
    this.cost = CoolingSystem.cost;
    this.heat_removal = CoolingSystem.heat_removal;
    this.image = CoolingSystem.image;
    this.description = CoolingSystem.description;
    this.title = CoolingSystem.title;
    this.type_size = CoolingSystem.type_size;
    this.createdAt = CoolingSystem.createdAt;
    this.updatedAt = CoolingSystem.updatedAt;
  }
}
