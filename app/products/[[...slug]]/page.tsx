import React from "react";

type TProps = {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
};

export default function ProductsPage({
  params: { slug },
  searchParams: { sortOrder },
}: TProps) {
  return (
    <div>
      <h1>Products page: {slug}</h1>
      <h1>Sort order: {sortOrder}</h1>
    </div>
  );
}
