import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";

import { getPost } from "@/services/posts";
import { Post } from "@/types/post.type";

import { PostContent } from "./components/postContent/PostContent";
import styles from "./components/postContent/PostContent.module.scss";

interface DataTypePost {
  post: Post;
}

const roboto = Poppins({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});

async function getData(slug: string) {
  return getPost(slug);
}

export default async function PostPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { post }: DataTypePost = await getData(slug);
  if (!post) return notFound();

  return (
    <div className={(roboto.className, styles.wrapper)}>
      <PostContent post={post} />
    </div>
  );
}
