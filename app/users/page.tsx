import React from "react";
import UserTable from "./UserTable";

export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: TGETUsers[] = await res.json();

  return (
    <>
      <h1>USER PAGE</h1>
      <UserTable users={users} />
    </>
  );
}
