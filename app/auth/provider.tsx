"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

export default function AuthProvider({ children }: TProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
