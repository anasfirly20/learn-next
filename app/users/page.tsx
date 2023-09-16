"use client";

// SWR
import { useUser } from "@/swr/useUser";

// Components
import CustomButton from "../components/CustomButton";
import CustomModal from "../components/CustomModal";
import UserTable from "./UserTable";

// Next UI
import { useDisclosure } from "@nextui-org/use-disclosure";

type TProps = {
  searchParams: { sortBy: string };
};

export default function UserPage({ searchParams: { sortBy } }: TProps) {
  // Modal Next UI
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // swr
  // const { users, isLoading } = useUser();

  return (
    <>
      <CustomButton label="Add User" color="primary" onPress={onOpen} />
      <UserTable sortBy={sortBy} />
      <CustomModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
