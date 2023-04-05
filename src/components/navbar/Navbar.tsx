"use client";

import Link from "next/link";

import { Routes } from "@/types/routes.type";

import Navigator from "../navigator/Navigator";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href={Routes.HOME.path} className={styles.logo}>
        {Routes.HOME.name}
      </Link>
      <ul className={styles.nav_links}>
        {<Navigator pathNames={[Routes.HOME, Routes.POSTS]} />}
      </ul>
    </div>
  );
};
