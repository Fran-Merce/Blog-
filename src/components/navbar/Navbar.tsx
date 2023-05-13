"use client";

import Link from "next/link";

import { Routes } from "@/types/routes.type";

import Navigator from "../navigator/Navigator";

export const Navbar = () => {
  return (
    <div>
      <Link href={Routes.HOME.path}>{Routes.HOME.name}</Link>
      <ul>{<Navigator pathNames={[Routes.HOME, Routes.POSTS]} />}</ul>
    </div>
  );
};
