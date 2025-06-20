import { BluetoothModule } from "@prisma/client";

export default class BluetoothModuleListOut {
  id: number;
  title: string;
  generation: string;
  cost: number | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  description: string | null;
  image: string | null;
  constructor(bluetooth: BluetoothModule) {
    this.id = bluetooth.id;
    this.cost = bluetooth.cost;
    this.generation = bluetooth.generation;
    this.image = bluetooth.image;
    this.description = bluetooth.description;
    this.title = bluetooth.title;
    this.createdAt = bluetooth.createdAt;
    this.updatedAt = bluetooth.updatedAt;
  }
}
