module.exports = class CpuListOut {
  id;
  title;
  cores;
  cost;
  threads;
  Architecture;
  cache;
  clock;
  createdAt;
  updatedAt;
  description;
  image;
  constructor(cpu) {
    this.id = cpu.id;
    this.cost = cpu.cost;
    this.cores = cpu.cores;
    this.title = cpu.title;
    this.image = cpu.image;
    this.description = cpu.description;
    this.threads = cpu.threads;
    this.Architecture = cpu.Architecture;
    this.cache = cpu.cache;
    this.clock = cpu.clock;
    this.createdAt = cpu.createdAt;
    this.updatedAt = cpu.updatedAt;
  }
};
