-- CreateTable
CREATE TABLE "template_classes" (
    "id" SERIAL NOT NULL,
    "class_name" TEXT NOT NULL,
    "items" TEXT[],
    "isSet" BOOLEAN NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "template_classes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "template_classes_class_name_key" ON "template_classes"("class_name");
