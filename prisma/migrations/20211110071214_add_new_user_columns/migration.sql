/*
  Warnings:

  - You are about to drop the column `preferences` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `sizes` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "preferences",
DROP COLUMN "sizes",
ADD COLUMN     "birthdate" TIMESTAMP(3),
ADD COLUMN     "favourite" TEXT[],
ADD COLUMN     "gender" TEXT,
ADD COLUMN     "size" JSONB;
