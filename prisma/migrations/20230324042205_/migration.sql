-- CreateTable
CREATE TABLE "foodItem" (
    "id" TEXT NOT NULL,
    "food_Name" VARCHAR(100) NOT NULL,
    "category" VARCHAR(100) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "foodItem_pkey" PRIMARY KEY ("id")
);
