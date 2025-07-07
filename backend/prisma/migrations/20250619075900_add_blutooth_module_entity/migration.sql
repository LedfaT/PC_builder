-- CreateTable
CREATE TABLE "bluetooth_module" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT,
    "description" TEXT,
    "generation" TEXT NOT NULL,
    "cost" DOUBLE PRECISION,

    CONSTRAINT "bluetooth_module_pkey" PRIMARY KEY ("id")
);
