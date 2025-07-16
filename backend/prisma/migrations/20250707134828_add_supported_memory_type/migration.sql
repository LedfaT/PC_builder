/*
  Warnings:

  - Added the required column `supported_memory_type` to the `motherboard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "motherboard" ADD COLUMN     "supported_memory_type" "MemoryType" NOT NULL;
