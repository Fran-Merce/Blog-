import Image from "next/image";

import avartarImg from "@/assets/images/avatar.png";

import styles from "./Hero.module.scss";

import React from "react";

export const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.textColor}>Hello, I'm Huy</h1>
        <Image src={avartarImg} alt="hero" width={250} height={250} />
        <p>
          I'm a software engineer, I love to build things with React, NextJS,
          NodeJS, GraphQL, TypeScript, and more.
        </p>
      </div>
    </div>
  );
};
