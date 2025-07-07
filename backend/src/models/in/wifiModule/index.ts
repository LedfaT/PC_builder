import { WifiModule } from "@prisma/client";
export default class WifiModuleCreate {
  title: string;
  generation: string;
  image: string | null;
  description: string | null;
  cost: number | null;

  constructor(wifi: WifiModule) {
    this.cost = wifi.cost;
    this.image = wifi.image;
    this.description = wifi.description;
    this.generation = wifi.generation;
    this.title = wifi.title;
  }
}

export type TWifiModuleUpdate = Partial<WifiModuleCreate>;
