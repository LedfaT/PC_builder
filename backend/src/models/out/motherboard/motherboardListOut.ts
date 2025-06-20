import { Motherboard, TypeSize } from "@prisma/client";

export default class motherboardListOut {
  id: number;
  title: string;
  chipset: string;
  cost: number | null;
  type_size: TypeSize;
  socket: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  description: string | null;
  image: string | null;

  constructor(motherboard: Motherboard) {
    this.id = motherboard.id;
    this.cost = motherboard.cost;
    this.chipset = motherboard.chipset;
    this.title = motherboard.title;
    this.image = motherboard.image;
    this.description = motherboard.description;
    this.type_size = motherboard.type_size;
    this.socket = motherboard.socket;
    this.createdAt = motherboard.createdAt;
    this.updatedAt = motherboard.updatedAt;
  }
}
