"use client";

import CustomButton from "../components/CustomButton";
import UserTable from "./UserTable";

import { useDisclosure } from "@nextui-org/react";

import useSWR from "swr";
import axios from "axios";

type TProps = {
  searchParams: { sortBy: string };
};

export default function UserPage({ searchParams: { sortBy } }: TProps) {
  const { data, isLoading } = useSWR("http://localhost:3000/api/users");

  return (
    <>
      <CustomButton label="Add User" color="primary" />
      <UserTable users={data} isLoading={isLoading} sortBy={sortBy} />
    </>
  );
}
