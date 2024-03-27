-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Dua" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cat_id" INTEGER NOT NULL,
    "subcat_id" INTEGER NOT NULL,
    "dua_id" INTEGER NOT NULL,
    "dua_name_bn" TEXT NOT NULL,
    "dua_name_en" TEXT NOT NULL,
    "top_bn" TEXT NOT NULL,
    "top_en" TEXT NOT NULL,
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
    "audio" TEXT
);
INSERT INTO "new_Dua" ("audio", "bottom_bn", "bottom_en", "cat_id", "clean_arabic", "dua_arabic", "dua_id", "dua_indopak", "dua_name_bn", "dua_name_en", "id", "reference_bn", "reference_en", "subcat_id", "top_bn", "top_en", "translation_bn", "translation_en", "transliteration_bn", "transliteration_en") SELECT "audio", "bottom_bn", "bottom_en", "cat_id", "clean_arabic", "dua_arabic", "dua_id", "dua_indopak", "dua_name_bn", "dua_name_en", "id", "reference_bn", "reference_en", "subcat_id", "top_bn", "top_en", "translation_bn", "translation_en", "transliteration_bn", "transliteration_en" FROM "Dua";
DROP TABLE "Dua";
ALTER TABLE "new_Dua" RENAME TO "Dua";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
