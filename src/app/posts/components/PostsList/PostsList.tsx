"use client";

import Image from "next/image";

import { PostCard } from "@/components/post-card/PostCard";
import { Button, Input } from "@/components/ui";
import { NotFound } from "@/components/ui/NotFound/NotFound";
import { POST_PER_PAGE } from "@/constants/offset.constant";
import { Post } from "@/types/post.type";

import styles from "./postsList.module.scss";

import { useEffect, useState } from "react";

interface Props {
  posts: Post[];
}

function PostsList({ posts }: Props) {
  const [data, setData] = useState<Post[]>(posts.slice(0, POST_PER_PAGE));
  const [hasMore, setHasMore] = useState<boolean>(true);

  const viewMore = () => {
    if (data.length >= posts.length) return setHasMore(false);

    setData((state) => posts.slice(0, state.length + POST_PER_PAGE));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return setData(posts.slice(0, POST_PER_PAGE));

    const value = e.target.value;
    const filteredPosts = posts.filter(
      ({ title, content }) =>
        title.toLowerCase().includes(value.toLowerCase()) ||
        content.html.toLowerCase().includes(value.toLowerCase()),
    );

    setData(filteredPosts);
  };

  useEffect(() => setHasMore(data.length < posts.length), [data, posts]);

  return (
    <>
      <Input customClass={styles.inputContainer} onChange={handleSearch} />
      <div className={styles.posts}>
        {data.length ? (
          data.map((post: Post) => <PostCard key={post.slug} post={post} />)
        ) : (
          <NotFound text="Posts Not Found" />
        )}
      </div>
      <Button disabled={!hasMore || !data.length} onClick={viewMore}>
        Load More
      </Button>
    </>
  );
}

export default PostsList;
