"use client";

// Next UI
import { Button } from "@nextui-org/button";

type TProps = {
  label: string;
  color: "primary" | "secondary" | "success" | "warning" | "danger";
  onPress: () => void;
};

export default function CustomButton({ label, color, onPress }: TProps) {
  return (
    <>
      <Button color={color} onPress={onPress}>
        {label}
      </Button>
    </>
  );
}
