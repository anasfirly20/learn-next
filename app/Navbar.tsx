import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex w-full sticky top-0 justify-between px-[20vw] py-[1vh] bg-cyan-700">
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
      <Link href="/upload">Upload</Link>
    </nav>
  );
}
