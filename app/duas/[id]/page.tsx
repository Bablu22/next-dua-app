import { prisma } from "@/prisma";
import { notFound } from "next/navigation";
import DuaDescriptionCard from "../_components/DuaDescriptionCard";

interface Props {
  params: { id: string };
}

const DuaPage = async ({ params }: Props) => {
  const dua = await fetch(
    `https://dua-app-eight.vercel.app/api/dua/${Number(params.id)}`
  ).then((res) => res.json());

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
