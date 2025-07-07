-- CreateEnum
CREATE TYPE "TypeSizeWaterCoolingSystem" AS ENUM ('mm280', 'mm360', 'mm240');

-- CreateTable
CREATE TABLE "water_cooling_system" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT,
    "description" TEXT,
    "type_size" INTEGER NOT NULL,
    "heat_removal" TEXT NOT NULL,
    "cost" DOUBLE PRECISION,

    CONSTRAINT "water_cooling_system_pkey" PRIMARY KEY ("id")
);
