module.exports = class WifiModuleListOut {
  id;
  title;
  generation;
  cost;
  constructor(wifi) {
    this.id = wifi.id;
    this.cost = wifi.cost;
    this.image = wifi.image;
    this.description = wifi.description;
    this.generation = wifi.generation;
    this.title = wifi.title;
  }
};
