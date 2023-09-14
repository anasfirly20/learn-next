import React from "react";

type TProps = {
  params: { id: number };
};

export default function UserDetailPage({ params }: TProps) {
  const { id } = params;

  return (
    <div>
      <h1>DETAIL {id}</h1>
    </div>
  );
}
