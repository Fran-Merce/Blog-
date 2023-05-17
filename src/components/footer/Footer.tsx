import { AiFillGithub, AiFillHeart, AiFillLinkedin } from "react-icons/ai";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <AiFillGithub cursor="pointer" className="icon" size="2rem" />
      <p>
        Build with{" "}
        <span className={styles.heart}>
          <AiFillHeart color="#942DFB" size="1.2rem" />
        </span>{" "}
        by Francisco Merce
      </p>
      <AiFillLinkedin cursor="pointer" className={styles.icon} size="2rem" />
    </div>
  );
};
