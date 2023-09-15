"use client";

import { Button } from "@nextui-org/button";

type TProps = {
  error: Error;
  reset: () => void;
};

export default function error({ error, reset }: TProps) {
  console.log("Error >>", error);

  return (
    <div>
      <h1>An unexpected error has occurred</h1>
      <Button color="primary" onClick={() => reset()}>
        Retry
      </Button>
    </div>
  );
}
