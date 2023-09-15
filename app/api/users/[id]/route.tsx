import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

type TProps = {
  params: { id: number };
};

// GET by Id
export function GET(request: NextRequest, { params }: TProps) {
  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json({ id: 1, name: "Firly" });
}

// PUT by Id
export async function PUT(request: NextRequest, { params }: TProps) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  if (params.id > 10) {
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  }

  return NextResponse.json({ id: 1, name: body.name });
}

// DELETE by Id
export function DELETE(request: NextRequest, { params }: TProps) {
  if (params.id > 10) {
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  }

  return NextResponse.json({});
}
