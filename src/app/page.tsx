import { Hero } from "@/components/hero/Hero";
import { PostCard } from "@/components/post-card/PostCard";
import { graphClient } from "@/lib/graphql-client";
import { POST_QUERY } from "@/lib/queries";
import { Post } from "@/types/post.type";

import style from "./styles/home.module.scss";

type DataType = {
  posts: Post[];
};

export default async function Home() {
  const posts: DataType = await graphClient.request(POST_QUERY);
  return (
    <>
      <Hero />
      <div className={style.wrapper}>
        <div className={style.posts}>
          {posts.posts.map((post: any) => (
            <div key={post.slug}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
