import { CPU } from "@prisma/client";

export default class CpuUpdate {
  title: string;
  cores: string;
  cost: number;
  threads: string;
  Architecture: string;
  cache: string;
  clock: string;
  description: string | null;
  image: string | null;

  constructor(cpu: CPU) {
    this.cost = cpu.cost;
    this.cores = cpu.cores;
    this.title = cpu.title;
    this.image = cpu.image;
    this.description = cpu.description;
    this.threads = cpu.threads;
    this.Architecture = cpu.Architecture;
    this.cache = cpu.cache;
    this.clock = cpu.clock;
  }
}
