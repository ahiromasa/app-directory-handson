import { zSettings } from "@/app/type";
import { prisma } from "@/globals/db";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  const data = await request.json();
  const parsedData = zSettings.parse(data);
  await prisma.$transaction([
    prisma.metadata.update({
      where: { key: "version" },
      data: { value: parsedData.version },
    }),
    prisma.metadata.update({
      where: { key: "faq" },
      data: { value: parsedData.faq },
    }),
    prisma.metadata.update({
      where: { key: "tos" },
      data: { value: parsedData.tos },
    }),
  ]);
  return new NextResponse(null, { status: 204 });
}
