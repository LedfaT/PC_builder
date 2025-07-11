import { CPU, SocketType } from "@prisma/client";

export default class CpuCreate {
  title: string;
  cores: string;
  cost: number;
  threads: string;
  Architecture: string;
  cache: string;
  clock: string;
  description: string | null;
  image: string | null;
  socket: SocketType;
  constructor(cpu: CPU) {
    this.cost = cpu.cost;
    this.cores = cpu.cores;
    this.title = cpu.title;
    this.image = cpu.image;
    this.socket = cpu.socket;
    this.description = cpu.description;
    this.threads = cpu.threads;
    this.Architecture = cpu.Architecture;
    this.cache = cpu.cache;
    this.clock = cpu.clock;
  }
}

export type TCpuUpdate = Partial<CpuCreate>;
