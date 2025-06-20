module.exports = class HddOut {
  id;
  title;
  memory_quantity;
  cost;
  reading_speed;
  write_speed;
  createdAt;
  updatedAt;
  description;
  image;
  constructor(hdd) {
    this.id = hdd.id;
    this.cost = hdd.cost;
    this.memory_quantity = hdd.memory_quantity;
    this.image = hdd.image;
    this.title = hdd.title;
    this.description = hdd.description;
    this.reading_speed = hdd.reading_speed;
    this.write_speed = hdd.write_speed;
    this.createdAt = hdd.createdAt;
    this.updatedAt = hdd.updatedAt;
  }
};
