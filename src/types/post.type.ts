export interface PostType {
  title: string;
  excerpt: string;
  content: Content;
  slug: string;
  date: string;
  seo?: any;
  tags: string[];
  author: Author;
  coverImage: CoverImage;
}

interface CoverImage {
  fileName: string;
  publishedAt: string;
  url: string;
}

interface Author {
  name: string;
}

interface Content {
  html: string;
}
