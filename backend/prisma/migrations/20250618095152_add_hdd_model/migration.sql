-- CreateTable
CREATE TABLE "hdd" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "memory_quantity" TEXT NOT NULL,
    "reading_speed" TEXT NOT NULL,
    "write_speed" TEXT NOT NULL,
    "cost" DOUBLE PRECISION,

    CONSTRAINT "hdd_pkey" PRIMARY KEY ("id")
);
