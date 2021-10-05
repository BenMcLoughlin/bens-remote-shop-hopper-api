-- CreateTable
CREATE TABLE "statuses" (
    "id" SERIAL NOT NULL,
    "businessName" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "products" INTEGER NOT NULL,

    CONSTRAINT "statuses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "statuses_businessName_key" ON "statuses"("businessName");
