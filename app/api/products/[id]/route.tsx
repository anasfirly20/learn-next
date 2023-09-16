import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

type TProps = {
  params: { id: string };
};

// GET by id
export async function GET(req: NextRequest, { params }: TProps) {
  const product = await prisma.products.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}

// PUT by id
export async function PUT(req: NextRequest, { params }: TProps) {
  const body = await req.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const product = await prisma.products.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const updateProduct = await prisma.products.update({
    where: { id: product.id },
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(updateProduct);
}

// DELETE by id
export async function DELETE(req: NextRequest, { params }: TProps) {
  const product = await prisma.products.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 400 });
  }

  const deletedProduct = await prisma.products.delete({
    where: { id: product.id },
  });

  return NextResponse.json({});
}
