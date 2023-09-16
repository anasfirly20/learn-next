import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

// GET
export async function GET(req: NextRequest) {
  const products = await prisma.products.findMany();
  return NextResponse.json(products);
}

// POST
export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const product = await prisma.products.findUnique({
    where: { name: body.name },
  });

  if (product) {
    return NextResponse.json(
      { error: "Product already exists" },
      { status: 400 }
    );
  }

  const productNew = await prisma.products.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(productNew, { status: 201 });
}
