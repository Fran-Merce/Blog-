"use client";

import { Button, Input, NotFound, PostCard } from "@/components";
import { POST_PER_PAGE } from "@/constants";
import { PostType } from "@/types";

import styles from "./PostsList.module.scss";

import { useEffect, useState } from "react";

interface Props {
  posts: PostType[];
}

function PostsList({ posts }: Props) {
  const [data, setData] = useState<PostType[]>(posts.slice(0, POST_PER_PAGE));
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
      <Input
        placeholder="Typescript..."
        customClass={styles.inputContainer}
        onChange={handleSearch}
      />
      <div className={styles.posts}>
        {data.length ? (
          data.map((post: PostType) => <PostCard key={post.slug} post={post} />)
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
