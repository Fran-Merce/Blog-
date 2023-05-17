import { getPosts } from "@/services/posts";
import { PostType } from "@/types";

import { PostsList } from "./components";
import styles from "./styles/posts.module.scss";

type DataType = {
  posts: PostType[];
};

async function getData() {
  return getPosts();
}

export default async function Posts() {
  const posts: DataType = await getData();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>All Posts</h1>
      <PostsList posts={posts.posts} />
    </div>
  );
}
