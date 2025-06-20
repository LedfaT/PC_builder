module.exports = class motherboardOut {
  id;
  title;
  chipset;
  cost;
  type_size;
  socket;
  createdAt;
  updatedAt;
  description;
  image;
  constructor(motherboard) {
    this.id = motherboard.id;
    this.cost = motherboard.cost;
    this.chipset = motherboard.chipset;
    this.title = motherboard.title;
    this.image = motherboard.image;
    this.type_size = motherboard.type_size;
    this.description = motherboard.description;
    this.socket = motherboard.socket;
    this.createdAt = motherboard.createdAt;
    this.updatedAt = motherboard.updatedAt;
  }
};
