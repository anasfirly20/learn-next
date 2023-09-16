"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import Link from "next/link";
import { sort } from "fast-sort";

// Api
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@nextui-org/react";
import { deleteUser } from "@/api/routes/users";
import toast from "react-hot-toast";

type TProps = {
  users: TGETUsers[];
  sortBy: string;
  isLoading: boolean;
};

export default function UserTable({ users, sortBy, isLoading }: TProps) {
  // Helper function to compute the sorting key
  const getSortingKey = (user: TGETUsers) => {
    switch (sortBy) {
      case "name":
        return user.name;
      case "email":
        return user.email;
      case "address":
        return user.address;
      default:
        return "";
    }
  };
  const sortedUsers = sort(users).asc(getSortingKey);

  const queryClient = useQueryClient();
  const deleteUserMutation = useMutation(deleteUser, {
    onSuccess: () => {
      toast.success("User data has been deleted");
      queryClient.invalidateQueries(["usersData"]);
    },
    onError: (err) => console.log(err),
  });

  return (
    <Table aria-label="Example static collection table" className="mt-5">
      <TableHeader>
        <TableColumn>
          <Link href="/users/?sortBy=name">NAME</Link>
        </TableColumn>
        <TableColumn>
          <Link href="/users/?sortBy=email">EMAIL</Link>
        </TableColumn>
        <TableColumn>
          <Link href="/users/?sortBy=address">ADDRESS</Link>
        </TableColumn>
      </TableHeader>
      <TableBody>
        {sortedUsers?.map((user) => {
          return (
            <TableRow key={user?.id} className="group">
              <TableCell className="cursor-pointer">
                <Link href={`users/${user?.id}`}>{user?.name}</Link>
              </TableCell>
              <TableCell>{user?.email}</TableCell>
              <TableCell className="flex justify-between">
                {user?.address}
                <Button
                  color="danger"
                  className="opacity-0 group-hover:opacity-100"
                  onPress={() => {
                    deleteUserMutation.mutate(user.id);
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
