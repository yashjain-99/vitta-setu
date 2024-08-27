"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type SidebarItemProps = {
  item: SidebarFieldItem;
};

export const SidebarItem = ({ item }: SidebarItemProps) => {
  const pathName = usePathname();
  const isActive =
    pathName === item.route || pathName.startsWith(`${item.route}/`);
  return (
    <Link
      href={item.route}
      className={cn(
        "flex gap-2 items-center px-4 py-3 rounded-md border border-transparent text-base font-semibold font-inter text-[#344054] hover:bg-[#E9EFF5]",
        {
          "bg-gradient-to-r from-[#0179FE] to-[#4893FF] hover:from-[#0056D2] hover:to-[#3678D2] hover:border-[#0056D2]":
            isActive,
        }
      )}
    >
      <span>{item.icon}</span>
      <span className=" hidden lg:block">{item.label}</span>
    </Link>
  );
};
