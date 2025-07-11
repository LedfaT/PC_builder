require("dotenv").config();
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./router/authRouter";
import errorMiddleware from "@middlewares/errorMiddleware";
import bluetoothRouter from "@router/bluetoothRouter";
import coolingRouter from "@router/coolingSystemRouter";
import wifiRouter from "@router/wifiRouter";
import hddRouter from "@router/hddRouter";
import ssdRouter from "@router/ssdRouter";
import gpuRouter from "@router/gpuRouter";
import cpuRouter from "@router/cpuRouter";
import waterCoolingRouter from "@router/waterColingRouter";
import motherboardRouter from "@router/motherboardRouter";
import powerSupplyRouter from "@router/powerSupplyRouter";
import towerRouter from "@router/towerRouter";
import ramRouter from "@router/ramRouter";

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRouter);
app.use("/api/bluetooth-module", bluetoothRouter);
app.use("/api/cooling-system", coolingRouter);
app.use("/api/wifi-module", wifiRouter);
app.use("/api/HDD", hddRouter);
app.use("/api/SSD", ssdRouter);
app.use("/api/GPU", gpuRouter);
app.use("/api/CPU", cpuRouter);
app.use("/api/water-cooling-system", waterCoolingRouter);
app.use("/api/motherboard", motherboardRouter);
app.use("/api/power-supply", powerSupplyRouter);
app.use("/api/tower", towerRouter);
app.use("/api/RAM", ramRouter);
// app.use("/api/computer", computerRouter);
app.use(errorMiddleware);

const port = process.env.PORT ? Number(process.env.PORT) : 8080;

const start = async () => {
  app.listen(port, "0.0.0.0", () => {
    console.log(`Server listens on port ${port}`);
  });
};

start();
