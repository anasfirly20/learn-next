"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Link from "next/link";
import { sort } from "fast-sort";

type TProps = {
  users: TGETUsers[];
  sortBy: string;
};

export default function UserTable({ users, sortBy }: TProps) {
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

  return (
    <div>
      <Table aria-label="Example static collection table">
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
              <TableRow key={user?.id}>
                <TableCell className="cursor-pointer">
                  <Link href={`users/${user?.id}`}>{user?.name}</Link>
                </TableCell>
                <TableCell>{user?.email}</TableCell>
                <TableCell>{user?.address}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
