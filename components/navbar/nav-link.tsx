"use client";

import {NavbarItem} from "@heroui/navbar";
// import useMessageStore from "@/hooks/useMessageStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  href: string;
  label: string;
};

export default function NavLink({
  href,
  label,
}: Props) {
  const pathname = usePathname();
  // const { unreadCount } = useMessageStore(
  //   (state) => ({
  //     unreadCount: state.unreadCount,
  //   })
  // );

  return (
    <NavbarItem
      isActive={pathname === href}
      as={Link}
      href={href}
    >
      <span>{label}</span>
      {/* {href === "/messages" &&
        unreadCount > 0 && (
          <span className="ml-1">
            ({unreadCount})
          </span>
        )} */}
    </NavbarItem>
  );
}
