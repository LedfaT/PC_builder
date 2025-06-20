/*
  Warnings:

  - Changed the type of `type_size` on the `motherboard` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "motherboard" DROP COLUMN "type_size",
ADD COLUMN     "type_size" "TypeSize" NOT NULL;
