import { NextRequest, NextResponse } from "next/server";

type TProps = {
  params: { id: number };
};

export function GET(request: NextRequest, { params }: TProps) {
  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json({ id: 1, name: "Firly" });
}

export async function PUT(request: NextRequest, { params }: TProps) {
  const body = await request.json();

  if (!body.name) {
    return NextResponse.json({ error: "Name is required!" }, { status: 404 });
  }

  if (params.id > 10) {
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  }

  return NextResponse.json({ id: 1, name: body.name });
}
