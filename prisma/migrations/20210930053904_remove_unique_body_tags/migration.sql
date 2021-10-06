/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `products` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "products_body_html_key";

-- CreateIndex
CREATE UNIQUE INDEX "products_title_key" ON "products"("title");