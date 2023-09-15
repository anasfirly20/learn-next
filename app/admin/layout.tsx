import React, { ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

export default function layout({ children }: TProps) {
  return (
    <div className="flex">
      <aside>Sidebar</aside>
      {children}
    </div>
  );
}
