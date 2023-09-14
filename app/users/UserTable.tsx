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

type TProps = {
  users: TGETUsers[];
};

export default function UserTable({ users }: TProps) {
  return (
    <div>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>EMAIL</TableColumn>
          <TableColumn>ADDRESS</TableColumn>
        </TableHeader>
        <TableBody>
          {users?.map((user) => {
            return (
              <TableRow key="1">
                <TableCell className="cursor-pointer">
                  <Link href={`users/${user?.id}`}>{user?.name}</Link>
                </TableCell>
                <TableCell>{user?.email}</TableCell>
                <TableCell>{user?.address?.street}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
