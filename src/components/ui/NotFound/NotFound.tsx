import Image from "next/image";

import imageEmoji from "@/assets/images/emoji.png";

import styles from "./notFound.module.scss";

import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

export const NotFound = ({ text, ...props }: Props) => {
  return (
    <div className={styles.notFoundWrapper} {...props}>
      <h1 className={styles.notFound}>{text || "Not Found"}</h1>
      <Image height={90} width={90} src={imageEmoji} alt="emoji sad" />
    </div>
  );
};
