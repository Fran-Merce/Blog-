import PostsList from "@/app/posts/components/PostsList/PostsList";
import { getPosts } from "@/services/posts";
import { Post } from "@/types/post.type";

import styles from "./styles/posts.module.scss";

type DataType = {
  posts: Post[];
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
