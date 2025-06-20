module.exports = class SsdListOut {
  id;
  title;
  memory_quantity;
  cost;
  reading_speed;
  radiator_type;
  write_speed;
  createdAt;
  updatedAt;
  description;
  image;
  constructor(ssd) {
    this.id = ssd.id;
    this.cost = ssd.cost;
    this.memory_quantity = ssd.memory_quantity;
    this.title = ssd.title;
    this.image = ssd.image;
    this.description = ssd.description;
    this.reading_speed = ssd.reading_speed;
    this.radiator_type = ssd.radiator_type;
    this.write_speed = ssd.write_speed;
    this.createdAt = ssd.createdAt;
    this.updatedAt = ssd.updatedAt;
  }
};
