/*
  Warnings:

  - You are about to drop the `CPU` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Token` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Token" DROP CONSTRAINT "Token_userId_fkey";

-- DropTable
DROP TABLE "CPU";

-- DropTable
DROP TABLE "Token";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "user_role" "UserRole" NOT NULL DEFAULT 'USER',
    "isActivated" BOOLEAN NOT NULL DEFAULT false,
    "activationLink" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "token" (
    "id" SERIAL NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cpu" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "cores" TEXT NOT NULL,
    "threads" TEXT NOT NULL,
    "Architecture" TEXT NOT NULL,
    "cache" TEXT NOT NULL,
    "clock" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "cpu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gpu" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "cores" TEXT NOT NULL,
    "image" TEXT,
    "threads" TEXT NOT NULL,
    "vram_quantity" TEXT NOT NULL,
    "cache" TEXT NOT NULL,
    "clock" TEXT NOT NULL,
    "vram_type" TEXT NOT NULL,
    "cost" DOUBLE PRECISION,

    CONSTRAINT "gpu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "token_userId_key" ON "token"("userId");

-- AddForeignKey
ALTER TABLE "token" ADD CONSTRAINT "token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
