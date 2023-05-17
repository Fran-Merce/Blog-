import Link from "next/link";

import { Button, Hero, PostCard } from "@/components";
import { Routes } from "@/routes";
import { getPosts } from "@/services";
import "@/styles/prism-one-dark.css";
import { PostType } from "@/types";

import styles from "./styles/home.module.scss";

type DataType = {
  posts: PostType[];
};

async function getData() {
  return getPosts(4);
}

export default async function Home() {
  const posts: DataType = await getData();

  return (
    <div className={styles.wrapper}>
      <Hero />
      <div className={styles.wrapperPosts}>
        <div className={styles.posts}>
          {posts.posts.map((post: PostType) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <Button customClass={styles.button}>
          <Link href={Routes.POSTS.path}>See all posts</Link>
        </Button>
      </div>
    </div>
  );
}
