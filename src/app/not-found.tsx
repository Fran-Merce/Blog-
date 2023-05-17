import { NotFound } from "@/components";

import styles from "./styles/not-found.module.scss";

export default function Custom404() {
  return <NotFound className={styles.pageWrapper} text="Page Not Found" />;
}
