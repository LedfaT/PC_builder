import { BluetoothModule } from "@prisma/client";

export default class BluetoothModuleUpdate {
  title: string;
  generation: string;
  cost: number | null;
  description: string | null;
  image: string | null;
  constructor(bluetooth: BluetoothModule) {
    this.cost = bluetooth.cost;
    this.generation = bluetooth.generation;
    this.image = bluetooth.image;
    this.description = bluetooth.description;
    this.title = bluetooth.title;
  }
}
