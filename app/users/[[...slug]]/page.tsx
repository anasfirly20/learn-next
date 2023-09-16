import React, { Suspense } from "react";
import UserTable from "../UserTable";
import Link from "next/link";

type TProps = {
  params: { slug: string[] };
  searchParams: { sortBy: string };
};

export default async function UsersPage({
  params: { slug },
  searchParams: { sortBy },
}: TProps) {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = await fetch("http://localhost:3000/api/users", {
    cache: "no-store",
  });
  const users: TGETUsers[] = await res.json();

  console.log(">>>", users);

  return (
    <>
      <h1>USER PAGE</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <h1>Sort by: {sortBy}</h1>
      </Suspense>
      <Link href="/users/new">Create User</Link>
      <UserTable users={users} sortBy={sortBy} />
    </>
  );
}
