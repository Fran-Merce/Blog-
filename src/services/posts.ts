import { graphClient } from "@/lib/graphql-client";
import { POST_QUERY, POST_QUERY_BY_SLUG } from "@/lib/queries";
import { Post } from "@/types/post.type";

export const getPosts = async (first?: number): Promise<{ posts: Post[] }> => {
  const variables = {
    first: first || null,
  };
  return graphClient.request(POST_QUERY, variables);
};

export const getPost = async (slug: string): Promise<{ post: Post }> => {
  const variables = {
    slug,
  };
  return graphClient.request(POST_QUERY_BY_SLUG, variables);
};
