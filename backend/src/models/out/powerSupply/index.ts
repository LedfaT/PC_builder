import { PowerSupply } from "@prisma/client";

export default class PowerSupplyOut {
  id: number;
  title: string;
  strength: number;
  cost: number | null;
  sertificate: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  description: string | null;
  image: string | null;

  constructor(powerSupply: PowerSupply) {
    this.id = powerSupply.id;
    this.cost = powerSupply.cost;
    this.strength = powerSupply.strength;
    this.title = powerSupply.title;
    this.sertificate = powerSupply.sertificate;
    this.image = powerSupply.image;
    this.description = powerSupply.description;
    this.cost = powerSupply.cost;
    this.createdAt = powerSupply.createdAt;
    this.updatedAt = powerSupply.updatedAt;
  }
}
