"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const { status, data: session } = useSession();

  return (
    <nav className="flex w-full sticky top-0 justify-between px-[20vw] py-[1vh] bg-cyan-700">
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
      <Link href="/upload">Upload</Link>
      {status === "loading" && <p>loading...</p>}
      {status === "authenticated" && (
        <div>
          {session.user!.name}
          <Link href="/api/auth/signout" className="ml-3">
            Sign out
          </Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Sign In</Link>
      )}
    </nav>
  );
}
