import { notFound } from "next/navigation";
import DuaDescriptionCard from "../_components/DuaDescriptionCard";
import axios from "axios";

interface Props {
  params: { id: string };
}

const fetchDua = async (id: number) => {
  try {
    const response = await fetch(
      `https://dua-app-eight.vercel.app/api/dua/${id}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const dua = await response.json();
    return dua;
  } catch (error) {
    console.error("Error fetching dua:", error);
    throw error;
  }
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
