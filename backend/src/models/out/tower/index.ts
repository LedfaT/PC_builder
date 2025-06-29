import { FanType, Tower, TypeSizeTower } from "@prisma/client";

export default class TowerOut {
  id: number;
  title: string;
  fan_included: boolean;
  cost: number | null;
  type_size: TypeSizeTower;
  fan_type: FanType;
  createdAt: Date | null;
  updatedAt: Date | null;
  description: string | null;
  image: string | null;

  constructor(tower: Tower) {
    this.id = tower.id;
    this.cost = tower.cost;
    this.fan_included = tower.fan_included;
    this.title = tower.title;
    this.image = tower.image;
    this.description = tower.description;
    this.type_size = tower.type_size;
    this.fan_type = tower.fan_type;
    this.createdAt = tower.createdAt;
    this.updatedAt = tower.updatedAt;
  }
}
