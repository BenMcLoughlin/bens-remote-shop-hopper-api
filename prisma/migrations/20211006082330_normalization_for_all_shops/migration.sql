/*
  Warnings:

  - You are about to drop the column `body_html` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `product_type` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `published_at` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `businessName` on the `shops` table. All the data in the column will be lost.
  - You are about to drop the column `postalCode` on the `shops` table. All the data in the column will be lost.
  - You are about to drop the column `siteHost` on the `shops` table. All the data in the column will be lost.
  - You are about to drop the column `businessName` on the `statuses` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[business_name]` on the table `statuses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `business_name` to the `shops` table without a default value. This is not possible if the table is not empty.
  - Added the required column `site_host` to the `shops` table without a default value. This is not possible if the table is not empty.
  - Added the required column `business_name` to the `statuses` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "statuses_businessName_key";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "body_html",
DROP COLUMN "created_at",
DROP COLUMN "product_type",
DROP COLUMN "published_at",
DROP COLUMN "updated_at",
ADD COLUMN     "bodyHtml" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "productType" TEXT,
ADD COLUMN     "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "shops" DROP COLUMN "businessName",
DROP COLUMN "postalCode",
DROP COLUMN "siteHost",
ADD COLUMN     "business_name" TEXT NOT NULL,
ADD COLUMN     "postal_code" TEXT,
ADD COLUMN     "site_host" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "statuses" DROP COLUMN "businessName",
ADD COLUMN     "business_name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "statuses_business_name_key" ON "statuses"("business_name");

-- RenameIndex
ALTER INDEX "hotItems_name_key" RENAME TO "hot_items_name_key";
