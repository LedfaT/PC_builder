-- CreateEnum
CREATE TYPE "MemoryType" AS ENUM ('None', 'DDR3', 'DDR4', 'DDR5');

-- CreateEnum
CREATE TYPE "RadiatorType" AS ENUM ('None', 'Aluminium', 'Fan', 'Water');

-- CreateTable
CREATE TABLE "ram" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "memory_quantity" TEXT,
    "memory_type" "MemoryType" NOT NULL,
    "radiator_type" "RadiatorType" NOT NULL,
    "cost" DOUBLE PRECISION,

    CONSTRAINT "ram_pkey" PRIMARY KEY ("id")
);
