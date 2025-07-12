/*
  Warnings:

  - Added the required column `type` to the `computer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "computer" ADD COLUMN     "type" TEXT NOT NULL;
