"use client";
import { Dua } from "@prisma/client";
import duaCardIcon from "@/public/icons/duacard.svg";
import Image from "next/image";
import { PLayer } from "./Player";
import { useEffect, useState } from "react";
import axios from "axios";
import DuaCardLoading from "../[id]/loading";

interface Props {
  id: number;
}

const DuaDescriptionCard = ({ id }: Props) => {
  const [dua, setDua] = useState<Dua | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDua = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/dua/${id}`);
        setDua(res.data);
      } catch (error) {
        setError("Failed to fetch Dua. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchDua();
  }, [id]);

  if (loading) {
    return <DuaCardLoading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!dua) {
    return null;
  }

  return (
    <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md mb-20">
      <div className="flex flex-col gap-7 rounded-lg border px-4 py-6 sm:px-8">
        <div className="flex items-center gap-2.5">
          <Image src={duaCardIcon} alt="Allah" width={30} height={30} />{" "}
          <span className="text-green-600 text-lg font-semibold">
            {id}. {dua.dua_name_en}
          </span>
        </div>

        <p className="text-lg text-foreground">{dua.top_en || dua.top_bn}</p>

        {dua.dua_arabic && (
          <p className="py-2.5 text-right font-quran text-2xl text-foreground">
            {dua.dua_arabic}
          </p>
        )}

        {(dua.translation_en || dua.transliteration_en) && (
          <div className="space-y-2.5">
            {dua.transliteration_en && (
              <p>
                <span className="font-semibold italic">Transliteration:</span>{" "}
                {dua.transliteration_en}
              </p>
            )}
            {dua.transliteration_bn && (
              <p className="italic">উচ্চারণ: {dua.transliteration_bn}</p>
            )}
            {dua.translation_en && (
              <p>
                <span className="font-semibold">Translation:</span>{" "}
                {dua.translation_en}
              </p>
            )}
            {dua.translation_bn && <p>অনুবাদ: {dua.translation_bn}</p>}
          </div>
        )}

        {dua.audio && (
          <div className="flex items-center gap-4">
            <PLayer src={dua.audio} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DuaDescriptionCard;
