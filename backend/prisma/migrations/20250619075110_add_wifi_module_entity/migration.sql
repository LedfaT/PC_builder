-- CreateTable
CREATE TABLE "wifi_module" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "generation" TEXT NOT NULL,
    "cost" DOUBLE PRECISION,

    CONSTRAINT "wifi_module_pkey" PRIMARY KEY ("id")
);
