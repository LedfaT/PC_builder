-- CreateEnum
CREATE TYPE "RadiatorTypeSSD" AS ENUM ('None', 'Aluminium', 'Fan');

-- CreateTable
CREATE TABLE "ssd" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "memory_quantity" TEXT NOT NULL,
    "radiator_type" "RadiatorTypeSSD" NOT NULL,
    "reading_speed" TEXT NOT NULL,
    "write_speed" TEXT NOT NULL,
    "cost" DOUBLE PRECISION,

    CONSTRAINT "ssd_pkey" PRIMARY KEY ("id")
);
