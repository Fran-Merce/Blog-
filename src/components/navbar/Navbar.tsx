import Image from "next/image";
import Link from "next/link";

import { Navigator } from "@/components";
import { Routes } from "@/routes";

import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <Link href={Routes.HOME.path}>
        <Image src="/logo.png" alt="logo" width={64} height={64} />
      </Link>
      <ul className={styles.links}>
        {
          <Navigator
            pathNames={[Routes.HOME, Routes.POSTS, Routes.PORTFOLIO]}
          />
        }
      </ul>
    </div>
  );
};
