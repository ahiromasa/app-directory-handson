import { prisma } from "@/globals/db";
import { NextRequest, NextResponse } from "next/server";
import { zUpsertNote } from "../../../notes/type";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const note = await prisma.note.findUnique({
    where: { id: Number(params.id) },
  });

  if (note === null) {
    return new NextResponse(null, { status: 404 });
  } else {
    return NextResponse.json(note);
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await request.json();
  const parsedData = zUpsertNote.parse(data);
  await prisma.note.update({
    where: { id: Number(params.id) },
    data: { title: parsedData.title, body: parsedData.body },
  });
  return new NextResponse(null, { status: 204 });
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.note.delete({
    where: { id: Number(params.id) },
  });
  return new NextResponse(null, { status: 204 });
}
