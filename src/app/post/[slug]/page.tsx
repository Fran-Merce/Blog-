import { graphClient } from '@/lib/graphql-client';
import { POST_QUERY_BY_SLUG } from '@/lib/queries';
import { Post } from '@/types/post.type';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import styles from './post.module.scss';

interface DataTypePost {
  post: Post;
}

const roboto = Poppins({
  weight: '300',
  style: 'normal',
  subsets: ['latin'],
});

async function getProduct(slug: string) {
  const post: DataTypePost = await graphClient.request(POST_QUERY_BY_SLUG, {
    slug,
  });
  return post;
}
export default async function PostPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { post }: DataTypePost = await getProduct(slug);
  return (
    <>
      <div className={roboto.className}>
        <div className={styles.page_wrapper}>
          <header>
            <Image
              alt={post.coverImage.fileName}
              src={post.coverImage.url}
              width={700}
              height={700}
            />
          </header>
          <main className={styles.post_wrapper}>
            <h1>{post.title}</h1>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
          </main>
        </div>
      </div>
    </>
  );
}
