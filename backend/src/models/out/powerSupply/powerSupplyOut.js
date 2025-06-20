module.exports = class PowerSupplyOut {
  id;
  title;
  strength;
  cost;
  sertificate;
  cost;
  createdAt;
  updatedAt;
  description;
  image;
  constructor(powerSupply) {
    this.id = powerSupply.id;
    this.cost = powerSupply.cost;
    this.strength = powerSupply.strength;
    this.title = powerSupply.title;
    this.image = powerSupply.image;
    this.description = powerSupply.description;
    this.sertificate = powerSupply.sertificate;
    this.cost = powerSupply.cost;
    this.createdAt = powerSupply.createdAt;
    this.updatedAt = powerSupply.updatedAt;
  }
};
