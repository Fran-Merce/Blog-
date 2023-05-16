import Link from "next/link";

import { Hero } from "@/components/hero/Hero";
import { PostCard } from "@/components/post-card/PostCard";
import { Button } from "@/components/ui";
import { Routes } from "@/routes";
import { getPosts } from "@/services/posts";
import { Post } from "@/types/post.type";

import "../styles/prism-one-dark.css";
import styles from "./styles/home.module.scss";

type DataType = {
  posts: Post[];
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
          {posts.posts.map((post: Post) => (
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
