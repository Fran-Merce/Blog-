import { gql } from "graphql-request";

export const POST_QUERY = gql`
  {
    posts {
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
  query Post($slug: String!) {
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
