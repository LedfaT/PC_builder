-- CreateEnum
CREATE TYPE "TypeSizeCoolingSystem" AS ENUM ('mm280', 'mm360', 'mm240');

-- CreateTable
CREATE TABLE "cooling_system" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT,
    "description" TEXT,
    "type_size" "TypeSizeCoolingSystem" NOT NULL,
    "heat_removal" TEXT NOT NULL,
    "cost" DOUBLE PRECISION,

    CONSTRAINT "cooling_system_pkey" PRIMARY KEY ("id")
);
