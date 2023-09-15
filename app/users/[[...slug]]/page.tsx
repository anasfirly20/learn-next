import React from "react";
import UserTable from "../UserTable";

import { sort } from "fast-sort";

type TProps = {
  params: { slug: string[] };
  searchParams: { sortBy: string };
};

export default async function UsersPage({
  params: { slug },
  searchParams: { sortBy },
}: TProps) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: TGETUsers[] = await res.json();

  return (
    <>
      <h1>USER PAGE</h1>
      <h1>Sort by: {sortBy}</h1>
      <UserTable users={users} sortBy={sortBy} />
    </>
  );
}
