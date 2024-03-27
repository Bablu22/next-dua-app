-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cat_id" INTEGER NOT NULL,
    "cat_name_bn" TEXT NOT NULL,
    "cat_name_en" TEXT NOT NULL,
    "no_of_subcat" INTEGER NOT NULL,
    "no_of_dua" INTEGER NOT NULL,
    "cat_icon" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Subcategory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cat_id" INTEGER NOT NULL,
    "subcat_id" INTEGER NOT NULL,
    "subcat_name_bn" TEXT NOT NULL,
    "subcat_name_en" TEXT NOT NULL,
    "no_of_dua" INTEGER NOT NULL,
    CONSTRAINT "Subcategory_cat_id_fkey" FOREIGN KEY ("cat_id") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Dua" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cat_id" INTEGER NOT NULL,
    "subcat_id" INTEGER NOT NULL,
    "dua_id" INTEGER NOT NULL,
    "dua_name_bn" TEXT NOT NULL,
    "dua_name_en" TEXT NOT NULL,
    "top_bn" TEXT NOT NULL,
    "top_en" TEXT NOT NULL,
    "dua_arabic" TEXT NOT NULL,
    "dua_indopak" TEXT NOT NULL,
    "clean_arabic" TEXT NOT NULL,
    "transliteration_bn" TEXT NOT NULL,
    "transliteration_en" TEXT NOT NULL,
    "translation_bn" TEXT NOT NULL,
    "translation_en" TEXT NOT NULL,
    "bottom_bn" TEXT NOT NULL,
    "bottom_en" TEXT NOT NULL,
    "reference_bn" TEXT NOT NULL,
    "reference_en" TEXT NOT NULL,
    "audio" TEXT NOT NULL,
    CONSTRAINT "Dua_cat_id_fkey" FOREIGN KEY ("cat_id") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Dua_subcat_id_fkey" FOREIGN KEY ("subcat_id") REFERENCES "Subcategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
