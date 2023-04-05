"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Navbar.module.scss";
import { NavItemsType } from "./navItems.type";

import { useEffect, useState } from "react";

const navItems = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Blog",
    link: "/blog",
  },
];
export const Navbar = () => {
  const path = usePathname();
  const [active, setActive] = useState<NavItemsType | null>(null);
  const getActive = (link: string) =>
    navItems.map((item: NavItemsType) => item.link === link && setActive(item));

  useEffect(() => {
    getActive(path);
  }, [path]);

  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>PLACE</span>
      <ul className={styles.nav_links}>
        {navItems.map((item: NavItemsType) => (
          <li key={item.text}>
            <Link
              className={active?.link === item.link ? styles.item_active : ""}
              href={item.link}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
