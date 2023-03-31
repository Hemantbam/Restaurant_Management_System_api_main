/*
  Warnings:

  - You are about to drop the `foodItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "foodItem";

-- CreateTable
CREATE TABLE "FoodItem" (
    "id" TEXT NOT NULL,
    "food_Name" VARCHAR(100) NOT NULL,
    "category" VARCHAR(100) NOT NULL,
    "Ingredient" TEXT,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "FoodItem_pkey" PRIMARY KEY ("id")
);
