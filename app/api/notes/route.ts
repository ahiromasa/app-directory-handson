import { prisma } from "@/globals/db";
import { NextRequest, NextResponse } from "next/server";
import { zUpsertNote } from "./type";

export const dynamic = "force-dynamic";

export async function GET() {
  const notes = await prisma.note.findMany();
  return NextResponse.json(notes);
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  const parsedData = zUpsertNote.parse(data);
  const note = await prisma.note.create({
    data: { title: parsedData.title, body: parsedData.body },
  });
  return new NextResponse(`${note.id}`, { status: 201 });
}
