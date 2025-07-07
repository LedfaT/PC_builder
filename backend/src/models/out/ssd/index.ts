import { RadiatorTypeSSD, SSD } from "@prisma/client";

export default class SsdOut {
  id: number;
  title: string;
  memory_quantity: string | null;
  cost: number | null;
  reading_speed: string;
  radiator_type: RadiatorTypeSSD;
  write_speed: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  description: string | null;
  image: string | null;

  constructor(ssd: SSD) {
    this.id = ssd.id;
    this.cost = ssd.cost;
    this.memory_quantity = ssd.memory_quantity;
    this.title = ssd.title;
    this.image = ssd.image;
    this.description = ssd.description;
    this.reading_speed = ssd.reading_speed;
    this.radiator_type = ssd.radiator_type;
    this.write_speed = ssd.write_speed;
    this.createdAt = ssd.createdAt;
    this.updatedAt = ssd.updatedAt;
  }
}
