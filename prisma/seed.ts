import { PrismaClient } from "@prisma/client";
import sqlite3 from "sqlite3";

const prisma = new PrismaClient();
const db = new sqlite3.Database("prisma/dua_main.sqlite");

async function importDuaData() {
  db.all("SELECT * FROM dua", async (err, rows) => {
    if (err) {
      console.error("Error reading dua data from SQLite database:", err);
      return;
    }

    try {
      for (const row of rows) {
        const rowData: any = row;
        await prisma.dua.create({
          data: {
            cat_id: rowData.cat_id,
            subcat_id: rowData.subcat_id,
            dua_id: rowData.dua_id,
            dua_name_bn: rowData.dua_name_bn,
            dua_name_en: rowData.dua_name_en,
            top_bn: rowData.top_bn,
            top_en: rowData.top_en,
            dua_arabic: rowData.dua_arabic,
            dua_indopak: rowData.dua_indopak,
            clean_arabic: rowData.clean_arabic,
            transliteration_bn: rowData.transliteration_bn,
            transliteration_en: rowData.transliteration_en,
            translation_bn: rowData.translation_bn,
            translation_en: rowData.translation_en,
            bottom_bn: rowData.bottom_bn,
            bottom_en: rowData.bottom_en,
            reference_bn: rowData.reference_bn || "",
            reference_en: rowData.reference_en || "",
            audio: rowData.audio,
          },
        });
      }

      console.log("Dua data import complete");
    } catch (error) {
      console.error("Error inserting dua data into Prisma database:", error);
    } finally {
      await prisma.$disconnect();
    }
  });
}

importDuaData();
