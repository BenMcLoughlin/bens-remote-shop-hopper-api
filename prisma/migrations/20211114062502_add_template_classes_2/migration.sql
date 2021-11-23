/*
  Warnings:

  - Added the required column `submitted` to the `template_classes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "template_classes" ADD COLUMN     "submitted" BOOLEAN NOT NULL,
ADD COLUMN     "submitted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
