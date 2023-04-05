import PostsList from "@/app/posts/components/PostsList";
import { graphClient } from "@/lib/graphql-client";
import { POST_QUERY } from "@/lib/queries";
import { Post } from "@/types/post.type";

import styles from "./page.module.scss";

type DaTatype = {
  posts: Post[];
};

export default async function Home() {
  const posts: DaTatype = await graphClient.request(POST_QUERY);

  return (
    <div className={styles.wrapper}>
      <h1>Posts</h1>
      <PostsList posts={posts.posts} />
    </div>
  );
}
