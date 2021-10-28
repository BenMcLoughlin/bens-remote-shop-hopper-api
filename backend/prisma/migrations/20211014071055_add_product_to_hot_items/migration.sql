/*
  Warnings:

  - You are about to drop the column `name` on the `hot_items` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `hot_items` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `hot_items` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `hot_items` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "hot_items_name_key";

-- AlterTable
ALTER TABLE "hot_items" DROP COLUMN "name",
DROP COLUMN "value",
ADD COLUMN     "bodyHtml" TEXT,
ADD COLUMN     "buckets" TEXT[],
ADD COLUMN     "businessName" TEXT,
ADD COLUMN     "colors" TEXT[],
ADD COLUMN     "compareAtPrice" INTEGER,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "handle" TEXT,
ADD COLUMN     "images" JSONB,
ADD COLUMN     "options" JSONB,
ADD COLUMN     "originalPrice" INTEGER,
ADD COLUMN     "productType" TEXT,
ADD COLUMN     "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "rating" INTEGER DEFAULT 0,
ADD COLUMN     "sizes" TEXT[],
ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "variants" JSONB,
ADD COLUMN     "vendor" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "hot_items_title_key" ON "hot_items"("title");
