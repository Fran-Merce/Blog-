import { Poppins } from "next/font/google";
import Image from "next/image";

import { graphClient } from "@/lib/graphql-client";
import { POST_QUERY_BY_SLUG } from "@/lib/queries";
import { Post } from "@/types/post.type";

interface DaTypePost {
  post: Post;
}

const roboto = Poppins({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});

async function getProduct(slug: string) {
  const post: DaTypePost = await graphClient.request(POST_QUERY_BY_SLUG, {
    slug,
  });
  return post;
}
export default async function PostPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { post }: DaTypePost = await getProduct(slug);
  return (
    <div className={roboto.className}>
      <div>
        <header>
          <Image
            alt={post.coverImage.fileName}
            src={post.coverImage.url}
            width={700}
            height={700}
          />
        </header>
        <main>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
        </main>
      </div>
    </div>
  );
}
