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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Input } from "@nextui-org/react";
import { deleteUser, getAllUsers } from "@/api/routes/users";

// Miscellaneous
import toast from "react-hot-toast";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

type TProps = {
  sortBy: string;
};

export default function UserTable({ sortBy }: TProps) {
  const { data = [], isLoading } = useQuery<TGETUsers[]>(["usersData"], () =>
    getAllUsers()
  );

  const [modifiedData, setModifiedData] = useState<TGETUsers[]>([]);

  useEffect(() => {
    if (data) {
      const modData = data?.map((e) => ({ ...e, isEdit: false }));
      setModifiedData(modData);
    }
  }, [data]);

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
  const sortedUsers = sort(modifiedData).asc(getSortingKey);

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
              {user?.isEdit ? <Input /> : <TableCell>{user?.email}</TableCell>}
              <TableCell className="flex items-center justify-between">
                {user?.address}
                <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => {
                      console.log(">>>", user);
                    }}
                  >
                    <Icon
                      icon="bx:edit"
                      className="text-2xl active:opacity-70"
                    />
                  </button>
                  <Button
                    color="danger"
                    onPress={() => {
                      deleteUserMutation.mutate(user.id);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
