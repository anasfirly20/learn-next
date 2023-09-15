import { NextRequest, NextResponse } from "next/server";
import schema from "../../users/schema";

type TProps = {
  params: { id: number };
};

// GET by id
export function GET(req: NextRequest, { params }: TProps) {
  if (params.id > 10) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  return NextResponse.json({ id: 1, name: "Milk", price: 2.5 });
}

// PUT by id
export async function PUT(req: NextRequest, { params }: TProps) {
  const body = await req.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  if (params.id > 10) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json({ id: 1, name: body.name, price: body.price });
}

// DELETE by id
export function DELETE(req: NextRequest, { params }: TProps) {
  if (params.id > 10) {
    return NextResponse.json({ error: "Product not found" }, { status: 400 });
  }
  return NextResponse.json({});
}
