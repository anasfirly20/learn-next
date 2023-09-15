import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Firly" },
    { id: 2, name: "Anas" },
  ]);
}
