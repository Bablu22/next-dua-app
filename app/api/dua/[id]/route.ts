import { prisma } from "@/prisma";
import { NextApiRequest } from "next";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextApiRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const dua = await prisma.dua.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!dua) {
    return NextResponse.json(
      {
        error: "Dua not found",
      },
      {
        status: 401,
      }
    );
  }

  return NextResponse.json(dua);
}
