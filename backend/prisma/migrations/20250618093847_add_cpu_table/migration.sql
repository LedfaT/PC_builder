-- CreateTable
CREATE TABLE "CPU" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "cores" TEXT,
    "threads" TEXT,
    "Architecture" TEXT,
    "cache" TEXT,
    "clock" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "CPU_pkey" PRIMARY KEY ("id")
);
