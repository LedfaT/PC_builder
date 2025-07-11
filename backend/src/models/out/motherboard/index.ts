import { MemoryType, Motherboard, SocketType, TypeSize } from "@prisma/client";

export default class motherboardOut {
  id: number;
  title: string;
  chipset: string;
  cost: number | null;
  type_size: TypeSize;
  socket: SocketType;
  createdAt: Date | null;
  updatedAt: Date | null;
  description: string | null;
  image: string | null;
  supported_memory_type: MemoryType;
  constructor(motherboard: Motherboard) {
    this.id = motherboard.id;
    this.cost = motherboard.cost;
    this.chipset = motherboard.chipset;
    this.title = motherboard.title;
    this.image = motherboard.image;
    this.description = motherboard.description;
    this.supported_memory_type = motherboard.supported_memory_type;
    this.type_size = motherboard.type_size;
    this.socket = motherboard.socket;
    this.createdAt = motherboard.createdAt;
    this.updatedAt = motherboard.updatedAt;
  }
}
