/*
  Warnings:

  - Made the column `cores` on table `CPU` required. This step will fail if there are existing NULL values in that column.
  - Made the column `threads` on table `CPU` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Architecture` on table `CPU` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cache` on table `CPU` required. This step will fail if there are existing NULL values in that column.
  - Made the column `clock` on table `CPU` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "CPU" ALTER COLUMN "cores" SET NOT NULL,
ALTER COLUMN "threads" SET NOT NULL,
ALTER COLUMN "Architecture" SET NOT NULL,
ALTER COLUMN "cache" SET NOT NULL,
ALTER COLUMN "clock" SET NOT NULL;
