/*
  Warnings:

  - You are about to drop the column `bucket` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `bucket` on the `shops` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "bucket",
ADD COLUMN     "buckets" TEXT[];

-- AlterTable
ALTER TABLE "shops" DROP COLUMN "bucket",
ADD COLUMN     "buckets" TEXT[];
