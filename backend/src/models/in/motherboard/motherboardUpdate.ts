import { Motherboard, TypeSize } from "@prisma/client";

export default class motherboardUpdate {
  title: string;
  chipset: string;
  cost: number | null;
  type_size: TypeSize;
  socket: string;
  description: string | null;
  image: string | null;

  constructor(motherboard: Motherboard) {
    this.cost = motherboard.cost;
    this.chipset = motherboard.chipset;
    this.title = motherboard.title;
    this.image = motherboard.image;
    this.description = motherboard.description;
    this.type_size = motherboard.type_size;
    this.socket = motherboard.socket;
  }
}
