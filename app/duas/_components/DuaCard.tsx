import { Dua } from "@prisma/client";
import Link from "next/link";

interface Props {
  dua: Dua;
  letter: string;
}

const DuaCard = ({ dua, letter }: Props) => {
  return (
    <Link
      href={`/duas/${dua.id}`}
      className="col-span-1 p-4 bg-white flex rounded-lg shadow-sm"
    >
      <div
        className={`flex w-10 2xl:w-16 p-4 flex-shrink-0 items-center justify-center rounded-l-md text-sm 2xl:text-xl bg-gray-50 font-medium text-gray-600`}
      >
        {letter}
      </div>
      <div className="flex flex-1 flex-col justify-between truncate rounded-r-md border-gray-200 bg-white">
        <div className="flex-1 px-4 py-2 text-sm 2xl:text-lg  overflow-hidden">
          <p className="text-gray-600 whitespace-pre-wrap">{dua.dua_name_en}</p>
        </div>
      </div>
    </Link>
  );
};

export default DuaCard;
