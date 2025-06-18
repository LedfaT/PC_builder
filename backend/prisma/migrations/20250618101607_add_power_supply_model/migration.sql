-- CreateTable
CREATE TABLE "power_supply" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "strength" INTEGER NOT NULL,
    "sertificate" TEXT,
    "cost" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "power_supply_pkey" PRIMARY KEY ("id")
);
