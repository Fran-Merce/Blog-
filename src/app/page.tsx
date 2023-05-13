import style from "@/app/styles/home.module.scss";
import { PostCard } from "@/components/post-card/PostCard";
import { graphClient } from "@/lib/graphql-client";
import { POST_QUERY } from "@/lib/queries";
import { Post } from "@/types/post.type";

type DaTaype = {
  posts: Post[];
};

export default async function Home() {
  const posts: DaTaype = await graphClient.request(POST_QUERY);
  return (
    <div className="">
      <h1 className={style.textColor}>Home</h1>
      <ul>
        {posts.posts.map((post: any) => (
          <li key={post.slug}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
