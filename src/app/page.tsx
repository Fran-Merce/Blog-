import { PostCard } from '@/components/post-card/PostCard';
import { graphClient } from '@/lib/graphql-client';
import { POST_QUERY } from '@/lib/queries';
import styles from '@/styles/pages/home.module.scss';
import { Post } from '@/types/post.type';
// import { Roboto } from 'next/font/google';

type dataType = {
  posts: Post[];
};

// const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
export default async function Home() {
  const posts: dataType = await graphClient.request(POST_QUERY);
  return (
    <>
      <div className="">
        <h1>Posts</h1>
        <ul className={styles.posts_wrapper}>
          {posts.posts.map((post: any) => (
            <li key={post.slug}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
