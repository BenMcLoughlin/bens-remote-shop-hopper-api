/*
  Warnings:

  - A unique constraint covering the columns `[body_html]` on the table `products` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "products_body_html_key" ON "products"("body_html");
