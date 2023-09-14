import React from "react";

export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: TGETUsers[] = await res.json();

  return (
    <>
      <h1>USER PAGE</h1>
      <ul>
        {users?.map((user) => (
          <li key={user?.id}>{user?.name}</li>
        ))}
      </ul>
    </>
  );
}
