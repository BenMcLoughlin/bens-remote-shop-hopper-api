/*
  Warnings:

  - The `bucket` column on the `products` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `bucket` column on the `shops` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "bucket",
ADD COLUMN     "bucket" TEXT[];

-- AlterTable
ALTER TABLE "shops" DROP COLUMN "bucket",
ADD COLUMN     "bucket" TEXT[];
