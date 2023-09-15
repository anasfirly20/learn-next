import React from "react";

type TProps = {
  params: { slug: string[] };
};

export default function ProductsPage({ params: { slug } }: TProps) {
  return (
    <div>
      <h1>Products page: {slug}</h1>
    </div>
  );
}
