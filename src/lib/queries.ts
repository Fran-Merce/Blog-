import { gql } from "graphql-request";

export const POST_QUERY = gql`
  query GetPosts($first: Int) {
    posts(first: $first) {
      title
      excerpt
      content {
        html
      }
      slug
      date
      seo {
        id
      }
      tags
      author {
        name
      }
      coverImage {
        fileName
        publishedAt
        url
      }
    }
  }
`;

export const POST_QUERY_BY_SLUG = gql`
  query PostType($slug: String!) {
    post(where: { slug: $slug }) {
      title
      excerpt
      content {
        html
      }
      slug
      date
      seo {
        id
      }
      tags
      author {
        name
      }
      coverImage {
        fileName
        publishedAt
        url
      }
    }
  }
`;

export const SLUG_LIST_QUERY = gql`
  {
    posts {
      slug
    }
  }
`;
