import React from "react";

type TProps = {
  params: { photoId: number; id: number };
};

export default function PhotoDetail({ params }: TProps) {
  const { photoId, id } = params;

  return (
    <div>
      <h1>USER ID: {id}</h1>
      <h1>PHOTO ID: {photoId}</h1>
    </div>
  );
}
