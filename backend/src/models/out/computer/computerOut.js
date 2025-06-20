// const BluetoothModuleListOut = require("../bluetoothModule/bluetoothModuleListOut");
// const CoolingSystemListOut = require("../coolingSystem/coolingSystemListOut");
// const CpuListOut = require("../cpu/cpuListOut");
// const GpuListOut = require("../gpu/gpuListOut");
// const HddListOut = require("../hdd/hddListOut");
// const MotherboardListOut = require("../motherboard/motherboardListOut");
// const PowerSupplyListOut = require("../powerSupply/powerSupplyListOut");
// const RamListOut = require("../ram/ramListOut");
// const SsdListOut = require("../ssd/ssdListOut");
// const TowerListOut = require("../tower/towerListOut");
// const WaterCoolingSystemListOut = require("../waterCoolingSystem/waterCoolingSystemListOut");
// const WifiModuleListOut = require("../wifiModule/wifiModuleListOut");
// const userDto = require("../../in/userIn");

// module.exports = class ComputerOut {
//   id;
//   description;
//   isPublished;
//   cost;
//   user;
//   bluetooth_module;
//   tower;
//   cooling_system;
//   cpu;
//   gpu;
//   hdd;
//   motherboard;
//   power_supply;
//   ram;
//   ssd;
//   water_cooling_system;
//   wifi_module;
//   description;
//   image;
//   title;
//   type;
//   createdAt;
//   constructor(computer) {
//     this.id = computer.id;
//     this.description = computer.description;
//     this.image = computer.image;
//     this.isPublished = computer.isPublished;
//     this.cost = computer.cost;
//     this.title = computer.title;
//     this.type = computer.type;
//     this.user = computer.User ? new userDto(computer.User) : null;
//     this.bluetooth_module =
//       new BluetoothModuleListOut(computer.BluetoothModule) || null;
//     this.tower = new TowerListOut(computer.Tower) || null;
//     this.cooling_system =
//       new CoolingSystemListOut(computer.CoolingSystem) || null;
//     this.cpu = new CpuListOut(computer.CPU) || null;
//     this.gpu = new GpuListOut(computer.GPU) || null;
//     this.hdd = new HddListOut(computer.HDD) || null;
//     this.motherboard = new MotherboardListOut(computer.Motherboard) || null;
//     this.power_supply = new PowerSupplyListOut(computer.PowerSupply) || null;
//     this.ram = new RamListOut(computer.RAM) || null;
//     this.ssd = new SsdListOut(computer.SSD) || null;
//     this.water_cooling_system =
//       new WaterCoolingSystemListOut(computer.WaterCoolingSystem) || null;
//     this.wifi_module = new WifiModuleListOut(computer.WifiModule) || null;
//     this.createdAt = computer.createdAt;
//   }
// };
