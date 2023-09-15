"use client";

import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export default function NewUserPage() {
  const router = useRouter();

  return (
    <div>
      <h1>New User</h1>
      <Button color="primary" onClick={() => router.push("/users")}>
        Go back
      </Button>
    </div>
  );
}
