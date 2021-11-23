/*
  Warnings:

  - You are about to drop the column `bodyHtml` on the `hot_items` table. All the data in the column will be lost.
  - You are about to drop the column `businessName` on the `hot_items` table. All the data in the column will be lost.
  - You are about to drop the column `compareAtPrice` on the `hot_items` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `hot_items` table. All the data in the column will be lost.
  - You are about to drop the column `originalPrice` on the `hot_items` table. All the data in the column will be lost.
  - You are about to drop the column `productType` on the `hot_items` table. All the data in the column will be lost.
  - You are about to drop the column `publishedAt` on the `hot_items` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `hot_items` table. All the data in the column will be lost.
  - You are about to drop the column `bodyHtml` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `businessName` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `compareAtPrice` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `originalPrice` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `productType` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `publishedAt` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "hot_items" DROP COLUMN "bodyHtml",
DROP COLUMN "businessName",
DROP COLUMN "compareAtPrice",
DROP COLUMN "createdAt",
DROP COLUMN "originalPrice",
DROP COLUMN "productType",
DROP COLUMN "publishedAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "body_html" TEXT,
ADD COLUMN     "business_name" TEXT,
ADD COLUMN     "compare_at_price" INTEGER,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "original_price" INTEGER,
ADD COLUMN     "product_type" TEXT,
ADD COLUMN     "published_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "bodyHtml",
DROP COLUMN "businessName",
DROP COLUMN "compareAtPrice",
DROP COLUMN "createdAt",
DROP COLUMN "originalPrice",
DROP COLUMN "productType",
DROP COLUMN "publishedAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "body_html" TEXT,
ADD COLUMN     "business_name" TEXT,
ADD COLUMN     "compare_at_price" INTEGER,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "original_price" INTEGER,
ADD COLUMN     "product_type" TEXT,
ADD COLUMN     "published_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
