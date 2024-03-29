import { prisma } from "@/prisma";
import { notFound } from "next/navigation";
import DuaDescriptionCard from "../_components/DuaDescriptionCard";

const fetchDua = async (id: number) => {
  try {
    const dua = await prisma.dua.findUnique({
      where: {
        id: id as number,
      },
    });
    return dua;
  } catch (error) {
    return null;
  }
};

interface Props {
  params: { id: string };
}

const DuaPage = async ({ params }: Props) => {
  const dua = await fetchDua(Number(params.id));

  if (!dua) {
    notFound();
  }

  return (
    <>
      <DuaDescriptionCard dua={dua} id={Number(params.id)} />
    </>
  );
};

export default DuaPage;
