import { RAM, MemoryType, RadiatorType } from "@prisma/client";

export default class RamListOut {
  id: number;
  title: string;
  memory_quantity: string | null;
  cost: number | null;
  memory_type: MemoryType;
  radiator_type: RadiatorType;
  createdAt: Date | null;
  updatedAt: Date | null;
  description: string | null;
  image: string | null;

  constructor(ram: RAM) {
    this.id = ram.id;
    this.cost = ram.cost;
    this.memory_quantity = ram.memory_quantity;
    this.title = ram.title;
    this.image = ram.image;
    this.description = ram.description;
    this.memory_type = ram.memory_type;
    this.radiator_type = ram.radiator_type;
    this.createdAt = ram.createdAt;
    this.updatedAt = ram.updatedAt;
  }
}
