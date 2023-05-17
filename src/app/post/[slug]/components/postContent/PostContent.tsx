"use client";

import Image from "next/image";
import Highlight from "react-highlight";

import "@/styles/root.scss";
import { PostType } from "@/types/post.type";

import "../../../../../styles/prism-one-dark.css";
import styles from "./postContent.module.scss";

import { useEffect } from "react";

export const PostContent = ({ post }: { post: PostType }) => {
  const { title, excerpt, coverImage, content } = post;

  useEffect(() => {
    if (!content) return;
  }, [content]);
  return (
    <>
      <header>
        <Image
          alt={coverImage.fileName}
          src={coverImage.url}
          className={styles.coverImage}
          width={700}
          height={500}
        />
      </header>
      <main>
        <h1 className={styles.title}>{title}</h1>
        <p>{excerpt}</p>
        <Highlight
          innerHTML={true}
          className={(styles.content, styles.codeSnippet, styles.contentCode)}>
          {content.html}
        </Highlight>
      </main>
    </>
  );
};
