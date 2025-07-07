/*
  Warnings:

  - Added the required column `socket` to the `cpu` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `socket` on the `motherboard` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "SocketType" AS ENUM ('AM4', 'LGA1200', 'LGA1700');

-- AlterTable
ALTER TABLE "cpu" ADD COLUMN     "socket" "SocketType" NOT NULL;

-- AlterTable
ALTER TABLE "motherboard" DROP COLUMN "socket",
ADD COLUMN     "socket" "SocketType" NOT NULL;

-- CreateTable
CREATE TABLE "computer" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "cost" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "cpuId" INTEGER,
    "gpuId" INTEGER,
    "ramId" INTEGER,
    "motherboardId" INTEGER,
    "powersupplyId" INTEGER,
    "towerId" INTEGER,
    "wifiModuleId" INTEGER,
    "bluetoothModuleId" INTEGER,
    "ssdId" INTEGER,
    "hddId" INTEGER,
    "coolingSystemId" INTEGER,
    "waterCoolingSystemId" INTEGER,

    CONSTRAINT "computer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "computer" ADD CONSTRAINT "computer_cpuId_fkey" FOREIGN KEY ("cpuId") REFERENCES "cpu"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "computer" ADD CONSTRAINT "computer_gpuId_fkey" FOREIGN KEY ("gpuId") REFERENCES "gpu"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "computer" ADD CONSTRAINT "computer_ramId_fkey" FOREIGN KEY ("ramId") REFERENCES "ram"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "computer" ADD CONSTRAINT "computer_motherboardId_fkey" FOREIGN KEY ("motherboardId") REFERENCES "motherboard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "computer" ADD CONSTRAINT "computer_powersupplyId_fkey" FOREIGN KEY ("powersupplyId") REFERENCES "power_supply"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "computer" ADD CONSTRAINT "computer_towerId_fkey" FOREIGN KEY ("towerId") REFERENCES "tower"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "computer" ADD CONSTRAINT "computer_wifiModuleId_fkey" FOREIGN KEY ("wifiModuleId") REFERENCES "wifi_module"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "computer" ADD CONSTRAINT "computer_bluetoothModuleId_fkey" FOREIGN KEY ("bluetoothModuleId") REFERENCES "bluetooth_module"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "computer" ADD CONSTRAINT "computer_ssdId_fkey" FOREIGN KEY ("ssdId") REFERENCES "ssd"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "computer" ADD CONSTRAINT "computer_hddId_fkey" FOREIGN KEY ("hddId") REFERENCES "hdd"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "computer" ADD CONSTRAINT "computer_coolingSystemId_fkey" FOREIGN KEY ("coolingSystemId") REFERENCES "cooling_system"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "computer" ADD CONSTRAINT "computer_waterCoolingSystemId_fkey" FOREIGN KEY ("waterCoolingSystemId") REFERENCES "water_cooling_system"("id") ON DELETE SET NULL ON UPDATE CASCADE;
