import { prisma } from "@/prisma";

import { Dua } from "@prisma/client";
import DuaCard from "../_components/DuaCard";

const fetchAllDuas = async () => {
  try {
    const allDuas = await prisma.dua.findMany({
      where: {
        NOT: {
          dua_name_en: null,
        },
      },
      orderBy: {
        dua_name_en: "asc", // Sort dua_name_en in ascending order
      },
    });
    return allDuas;
  } catch (error) {
    console.error("Error fetching duas:", error);
    return [];
  }
};

const groupDuasByFirstLetter = (duas: any) => {
  // Group duas by the first letter of dua_name_en
  return duas.reduce((acc: any, dua: any) => {
    const firstLetter = dua.dua_name_en?.toUpperCase()[0] || "";
    acc[firstLetter] = acc[firstLetter] || [];
    acc[firstLetter].push(dua);
    return acc;
  }, {});
};

const AllDua = async () => {
  const allDuas = await fetchAllDuas();
  const groupedDuas = groupDuasByFirstLetter(allDuas);

  return (
    <div className="mt-5">
      {/* Render each group of duas in a separate card */}
      {Object.entries(groupedDuas).map(([letter, duas]) => (
        <div key={letter} className="mb-8">
          <span className=" h-10 w-10 rounded bg-green-600 text-white flex items-center justify-center">
            {letter}
          </span>

          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(duas as Dua[]).map((dua: Dua) => (
              <DuaCard key={dua.id} dua={dua} letter={letter} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllDua;
