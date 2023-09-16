"use client";

// Next UI
import { Button } from "@nextui-org/button";

type TProps = {
  label: string;
  color: "primary" | "secondary" | "success" | "warning" | "danger";
};

export default function CustomButton({ label, color }: TProps) {
  return (
    <>
      <Button color={color}>{label}</Button>
    </>
  );
}
