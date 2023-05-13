"use client";

import { PostCard } from "@/components/post-card/PostCard";
import { POST_PER_PAGE } from "@/constants/offset.constant";
import { Post } from "@/types/post.type";

import { useEffect, useState } from "react";

interface Props {
  posts: Post[];
}

function PostsList({ posts }: Props) {
  const [data, setData] = useState<Post[]>(posts.slice(0, POST_PER_PAGE));
  const [hasMore, setHasMore] = useState<boolean>(true);

  const viewMore = () => {
    setData((state) => posts.slice(0, state.length + POST_PER_PAGE));
  };

  useEffect(() => {
    setHasMore(data.length < posts.length);
  }, [data, posts]);

  return (
    <div>
      <div>
        {data.map((post: Post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      <button disabled={!hasMore} onClick={viewMore}>
        Load More
      </button>
    </div>
  );
}

export default PostsList;
