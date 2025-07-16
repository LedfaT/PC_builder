import { HDD } from "@prisma/client";

export default class HddCreate {
  title: string;
  memory_quantity: string;
  cost: number | null;
  reading_speed: string;
  write_speed: string;
  description: string | null;
  image: string | null;

  constructor(hdd: HDD) {
    this.cost = hdd.cost ? +hdd.cost : 0;
    this.memory_quantity = hdd.memory_quantity;
    this.title = hdd.title;
    this.image = hdd.image;
    this.description = hdd.description;
    this.reading_speed = hdd.reading_speed;
    this.write_speed = hdd.write_speed;
  }
}

export type THddUpate = Partial<HddCreate>;
