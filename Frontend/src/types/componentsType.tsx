export interface ICPU {
  title: string;
  description: string;
  image: string;
  cores: string;
  threads: string;
  Architecture: string;
  cache: string;
  clock: string;
  cost: string;
}

export const DefaultCPU: ICPU = {
  title: "",
  description: "",
  image: "",
  cores: "",
  threads: "",
  Architecture: "",
  cache: "",
  clock: "",
  cost: "",
};

export interface IBluetooth {
  title: string;
  description: string;
  image: string;
  generation: string;
  cost: string;
}

export const DefaultBluetooth: IBluetooth = {
  title: "",
  description: "",
  image: "",
  generation: "",
  cost: "",
};

export interface IGPU {
  title: string;
  description: string;
  image: string;
  cores: string;
  threads: string;
  vram_quantity: string;
  cache: string;
  clock: string;
  cost: string;
  vram_type: string;
}

export const DefaultGPU: IGPU = {
  title: "",
  description: "",
  image: "",
  cores: "",
  threads: "",
  vram_quantity: "",
  cache: "",
  clock: "",
  cost: "",
  vram_type: "",
};

export interface ICooling {
  title: string;
  description: string;
  image: string;
  type_size: string;
  heat_removal: string;
  cost: string;
}

export const DefaultCooling: ICooling = {
  title: "",
  description: "",
  image: "",
  type_size: "",
  heat_removal: "",
  cost: "",
};

export interface IHDD {
  title: string;
  description: string;
  image: string;
  memory_quantity: string;
  reading_speed: string;
  write_speed: string;
  cost: string;
}

export const DefaultHDD: IHDD = {
  title: "",
  description: "",
  image: "",
  memory_quantity: "",
  reading_speed: "",
  write_speed: "",
  cost: "",
};

export interface IMother {
  title: string;
  description: string;
  image: string;
  chipset: string;
  type_size: string;
  socket: string;
  cost: string;
}

export const DefaultMother: IMother = {
  title: "",
  description: "",
  image: "",
  chipset: "",
  type_size: "",
  socket: "",
  cost: "",
};

export interface IPower {
  title: string;
  description: string;
  image: string;
  strength: string;
  sertificate: string;
  cost: string;
}

export const DefaultPower: IPower = {
  title: "",
  description: "",
  image: "",
  strength: "",
  sertificate: "",
  cost: "",
};

export interface IRAM {
  title: string;
  description: string;
  image: string;
  strength: string;
  sertificate: string;
  cost: string;
}

export const DefaultRAM: IRAM = {
  title: "",
  description: "",
  image: "",
  strength: "",
  sertificate: "",
  cost: "",
};

export interface ISSD {
  title: string;
  description: string;
  image: string;
  memory_quantity: string;
  radiator_type: string;
  reading_speed: string;
  write_speed: string;
  cost: string;
}

export const DefaultSSD: ISSD = {
  title: "",
  description: "",
  image: "",
  memory_quantity: "",
  radiator_type: "",
  reading_speed: "",
  write_speed: "",
  cost: "",
};

export interface ITower {
  title: string;
  description: string;
  image: string;
  fan_included: string;
  type_size: string;
  fan_type: string;
  cost: string;
}

export const DefaultTower: ITower = {
  title: "",
  description: "",
  image: "",
  fan_included: "",
  type_size: "",
  fan_type: "",
  cost: "",
};

export interface IWater {
  title: string;
  description: string;
  image: string;
  type_size: string;
  heat_removal: string;
  cost: string;
}

export const DefaultWater: IWater = {
  title: "",
  description: "",
  image: "",
  type_size: "",
  heat_removal: "",
  cost: "",
};

export interface IWIFI {
  title: string;
  description: string;
  image: string;
  generation: string;
  cost: string;
}

export const DefaultWIFI: IWIFI = {
  title: "",
  description: "",
  image: "",
  generation: "",
  cost: "",
};
