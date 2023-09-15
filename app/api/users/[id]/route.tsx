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
