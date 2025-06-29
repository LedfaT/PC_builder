import { GPU } from "@prisma/client";

export default class GpuCreate {
  title: string;
  cores: string;
  cost: number | null;
  threads: string;
  vram_quantity: string;
  cache: string;
  clock: string;
  vram_type: string;
  description: string | null;
  image: string | null;

  constructor(gpu: GPU) {
    this.cost = gpu.cost;
    this.cores = gpu.cores;
    this.title = gpu.title;
    this.description = gpu.description;
    this.image = gpu.image;
    this.threads = gpu.threads;
    this.vram_quantity = gpu.vram_quantity;
    this.cache = gpu.cache;
    this.clock = gpu.clock;
    this.vram_type = gpu.vram_type;
  }
}

export type TGpuUpdate = Partial<GpuCreate>;
