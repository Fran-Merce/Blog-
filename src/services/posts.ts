import { POST_QUERY, POST_QUERY_BY_SLUG, graphClient } from "@/lib";
import { PostType } from "@/types";

export const getPosts = async (
  first?: number,
): Promise<{ posts: PostType[] }> => {
  const variables = {
    first: first || null,
  };
  return graphClient.request(POST_QUERY, variables);
};

export const getPost = async (slug: string): Promise<{ post: PostType }> => {
  const variables = {
    slug,
  };
  return graphClient.request(POST_QUERY_BY_SLUG, variables);
};
