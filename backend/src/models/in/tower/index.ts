import { FanType, Tower, TypeSizeTower } from "@prisma/client";

export default class TowerCreate {
  title: string;
  fan_included: boolean;
  cost: number | null;
  type_size: TypeSizeTower;
  fan_type: FanType;
  description: string | null;
  image: string | null;

  constructor(tower: Tower) {
    this.cost = tower.cost;
    this.fan_included = tower.fan_included;
    this.title = tower.title;
    this.image = tower.image;
    this.description = tower.description;
    this.type_size = tower.type_size;
    this.fan_type = tower.fan_type;
  }
}

export type TTowerUpdate = Partial<TowerCreate>;
