import { prisma } from "@/prisma";
import { notFound } from "next/navigation";
import DuaDescriptionCard from "../_components/DuaDescriptionCard";

const fetchDua = async () => {
  const dua = await prisma.dua.findMany({});
  return dua;
};

interface Props {
  params: { id: string };
}

const DuaPage = async ({ params }: Props) => {
  const alldua = await fetchDua();

  const dua = alldua.find((dua) => dua.id === Number(params.id));

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
