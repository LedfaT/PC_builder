import { container } from "@config/container";
import { WifiController } from "@controllers/wifiController";
import { wifiDependencyTypes } from "@ownTypes/dependencyTypes";
import { Router } from "express";

const wifiRouter = Router();

const wifiController = container.get<WifiController>(
  wifiDependencyTypes.WifiController
);
wifiRouter.post("/", wifiController.createWifi);
wifiRouter.get("/list", wifiController.getAllWifis);
wifiRouter.get("/:id", wifiController.getWifi);
wifiRouter.patch("/:id", wifiController.updateWifi);
wifiRouter.delete("/:id", wifiController.deleteWifi);

export default wifiRouter;
