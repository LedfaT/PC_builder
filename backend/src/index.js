require("dotenv").config();
const express = require("express");
const db = require("./entity");
const cors = require("cors");
const cookieParser = require("cookie-parser");

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

const port = process.env.PORT || 8080;

const start = async () => {
  app.listen(port, "0.0.0.0", () => {
    console.log(`Server listens on port ${port}`);
  });

  await db.sequelize.sync();
};

start();
