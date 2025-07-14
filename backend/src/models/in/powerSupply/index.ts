import { PowerSupply } from "@prisma/client";

export default class PowerSupplyCreate {
  title: string;
  strength: number;
  cost: number | null;
  sertificate: string | null;
  description: string | null;
  image: string | null;

  constructor(powerSupply: PowerSupply) {
    this.cost = powerSupply.cost ? +powerSupply.cost : 0;
    this.strength = powerSupply.strength ? +powerSupply.strength : 0;
    this.title = powerSupply.title;
    this.sertificate = powerSupply.sertificate;
    this.image = powerSupply.image;
    this.description = powerSupply.description;
  }
}

export type TPowerSupplyUpdate = Partial<PowerSupplyCreate>;
