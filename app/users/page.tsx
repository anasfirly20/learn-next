"use client";

// SWR
import { useUser } from "@/swr/useUser";

// Components
import CustomButton from "../components/CustomButton";
import CustomModal from "../components/CustomModal";
import UserTable from "./UserTable";

// Next UI
import { useDisclosure } from "@nextui-org/use-disclosure";
import { useState } from "react";

type TProps = {
  searchParams: { sortBy: string };
};

const initialValue = {
  name: "",
  email: "",
  address: "",
};

export default function UserPage({ searchParams: { sortBy } }: TProps) {
  const { users, isLoading } = useUser();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [data, setData] = useState(initialValue);

  return (
    <>
      <CustomButton label="Add User" color="primary" onPress={onOpen} />
      <UserTable users={users} isLoading={isLoading} sortBy={sortBy} />
      <CustomModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        data={data}
        setData={setData}
      />
    </>
  );
}
