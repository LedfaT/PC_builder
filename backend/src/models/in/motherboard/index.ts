import { MemoryType, Motherboard, SocketType, TypeSize } from "@prisma/client";

export default class motherboardCreate {
  title: string;
  chipset: string;
  cost: number | null;
  type_size: TypeSize;
  socket: SocketType;
  image: string | null;
  description: string | null;
  supported_memory_type: MemoryType;

  constructor(motherboard: Motherboard) {
    this.cost = motherboard.cost;
    this.chipset = motherboard.chipset;
    this.title = motherboard.title;
    this.image = motherboard.image;
    this.supported_memory_type = motherboard.supported_memory_type;
    this.description = motherboard.description;
    this.type_size = motherboard.type_size;
    this.socket = motherboard.socket;
  }
}

export type TMotherboardUpdate = Partial<motherboardCreate>;
