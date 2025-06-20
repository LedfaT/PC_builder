/*
  Warnings:

  - Changed the type of `type_size` on the `water_cooling_system` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "water_cooling_system" DROP COLUMN "type_size",
ADD COLUMN     "type_size" "TypeSizeWaterCoolingSystem" NOT NULL;
