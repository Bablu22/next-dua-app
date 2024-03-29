import { notFound } from "next/navigation";
import DuaDescriptionCard from "../_components/DuaDescriptionCard";
import axios from "axios";

interface Props {
  params: { id: string };
}

const fetchDua = async (id: number) => {
  const dua = await fetch(
    `https://dua-app-eight.vercel.app/api/dua/${id}`
  ).then((res) => res.json());
  return dua;
};

const DuaPage = async ({ params }: Props) => {
  const dua = await fetchDua(Number(params.id));
  if (!dua) {
    return notFound();
  }

  return (
    <>
      <DuaDescriptionCard dua={dua} id={Number(params.id)} />
    </>
  );
};

export default DuaPage;
