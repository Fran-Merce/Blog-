import { PostCard } from "@/components/post-card/PostCard";
import { graphClient } from "@/lib/graphql-client";
import { POST_QUERY } from "@/lib/queries";
import { Post } from "@/types/post.type";

type DaType = {
  posts: Post[];
};

export default async function Home() {
  const posts: DaType = await graphClient.request(POST_QUERY);
  return (
    <div className="">
      <h1>Home</h1>
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
