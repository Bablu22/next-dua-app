-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Dua" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cat_id" INTEGER NOT NULL,
    "subcat_id" INTEGER NOT NULL,
    "dua_id" INTEGER NOT NULL,
    "dua_name_bn" TEXT,
    "dua_name_en" TEXT,
    "top_bn" TEXT,
    "top_en" TEXT,
    "dua_arabic" TEXT,
    "dua_indopak" TEXT,
    "clean_arabic" TEXT,
    "transliteration_bn" TEXT,
    "transliteration_en" TEXT,
    "translation_bn" TEXT,
    "translation_en" TEXT,
    "bottom_bn" TEXT,
    "bottom_en" TEXT,
    "reference_bn" TEXT,
    "reference_en" TEXT,
    "audio" TEXT,
    CONSTRAINT "Dua_cat_id_fkey" FOREIGN KEY ("cat_id") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Dua_subcat_id_fkey" FOREIGN KEY ("subcat_id") REFERENCES "Subcategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Dua" ("audio", "bottom_bn", "bottom_en", "cat_id", "clean_arabic", "dua_arabic", "dua_id", "dua_indopak", "dua_name_bn", "dua_name_en", "id", "reference_bn", "reference_en", "subcat_id", "top_bn", "top_en", "translation_bn", "translation_en", "transliteration_bn", "transliteration_en") SELECT "audio", "bottom_bn", "bottom_en", "cat_id", "clean_arabic", "dua_arabic", "dua_id", "dua_indopak", "dua_name_bn", "dua_name_en", "id", "reference_bn", "reference_en", "subcat_id", "top_bn", "top_en", "translation_bn", "translation_en", "transliteration_bn", "transliteration_en" FROM "Dua";
DROP TABLE "Dua";
ALTER TABLE "new_Dua" RENAME TO "Dua";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
