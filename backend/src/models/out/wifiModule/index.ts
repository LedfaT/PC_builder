import { WifiModule } from "@prisma/client";
export default class WifiModuleOut {
  id: number;
  title: string;
  generation: string;
  image: string | null;
  description: string | null;
  cost: number | null;
  createdAt: Date | null;
  updatedAt: Date | null;

  constructor(wifi: WifiModule) {
    this.id = wifi.id;
    this.cost = wifi.cost;
    this.image = wifi.image;
    this.description = wifi.description;
    this.generation = wifi.generation;
    this.title = wifi.title;
    this.createdAt = wifi.createdAt;
    this.updatedAt = wifi.updatedAt;
  }
}
