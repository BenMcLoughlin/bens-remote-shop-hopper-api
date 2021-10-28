-- AlterTable
ALTER TABLE "products" ADD COLUMN     "bucket" TEXT,
ADD COLUMN     "colors" TEXT[],
ADD COLUMN     "compareAtPrice" INTEGER,
ADD COLUMN     "originalPrice" INTEGER,
ADD COLUMN     "sizes" TEXT[];
