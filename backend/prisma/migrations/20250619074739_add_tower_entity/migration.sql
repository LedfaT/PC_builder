-- CreateEnum
CREATE TYPE "FanType" AS ENUM ('mm200', 'mm120', 'mm92');

-- CreateEnum
CREATE TYPE "TypeSizeTower" AS ENUM ('None', 'Full_Tower', 'Mid_Tower', 'Mini_Tower');

-- CreateTable
CREATE TABLE "tower" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "fan_included" BOOLEAN NOT NULL DEFAULT true,
    "type_size" "TypeSizeTower" NOT NULL,
    "fan_type" "FanType" NOT NULL,
    "cost" DOUBLE PRECISION,

    CONSTRAINT "tower_pkey" PRIMARY KEY ("id")
);
