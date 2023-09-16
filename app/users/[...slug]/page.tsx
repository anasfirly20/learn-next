import React, { Suspense } from "react";

type TProps = {
  params: { slug: string[] };
};

export default async function UsersPageDetailed({ params: { slug } }: TProps) {
  return (
    <>
      <h1>SLUG: {slug}</h1>
    </>
  );
}
