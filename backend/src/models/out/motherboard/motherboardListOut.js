module.exports = class motherboardListOut {
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
    this.description = motherboard.description;
    this.type_size = motherboard.type_size;
    this.socket = motherboard.socket;
    this.createdAt = motherboard.createdAt;
    this.updatedAt = motherboard.updatedAt;
  }
};
