import { prisma } from "@/prisma";
import { notFound } from "next/navigation";
import DuaDescriptionCard from "../_components/DuaDescriptionCard";

interface Props {
  params: { id: string };
}

const DuaPage = async ({ params }: Props) => {
  return (
    <>
      <DuaDescriptionCard id={Number(params.id)} />
    </>
  );
};

export default DuaPage;
