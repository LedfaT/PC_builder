-- CreateEnum
CREATE TYPE "TypeSize" AS ENUM ('None', 'ATX', 'MicroATX', 'MiniITX');

-- CreateTable
CREATE TABLE "motherboard" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "chipset" TEXT NOT NULL,
    "type_size" INTEGER NOT NULL,
    "socket" TEXT NOT NULL,
    "cost" DOUBLE PRECISION,

    CONSTRAINT "motherboard_pkey" PRIMARY KEY ("id")
);
