/*
  Warnings:

  - The `location` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `birthdate` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `favourite` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "location",
ADD COLUMN     "location" JSONB,
DROP COLUMN "birthdate",
ADD COLUMN     "birthdate" INTEGER,
DROP COLUMN "favourite",
ADD COLUMN     "favourite" JSONB;
