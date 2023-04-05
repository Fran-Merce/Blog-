import { dateFormmater } from '@/helpers/dateFormatter';
import { textFormatterLenght } from '@/helpers/textFormatterLegth';
import { Post } from '@/types/post.type';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PostCard.module.scss';

export const PostCard = ({ post }: { post: Post }) => {
  const { title, author, content, coverImage, slug, date, seo, tags } = post;
  const getDescription = () => {
    const htmlToText = content.html.replace(/<[^>]*>?/gm, '');
    return textFormatterLenght(htmlToText, 96);
  };

  return (
    <div className={styles.post_card}>
      <Image
        src={coverImage.url}
        alt={seo}
        className={styles.img}
        width={100}
        height={100}
      />
      <div className={styles.info_wrapper}>
        <h3>{textFormatterLenght(title, 32)}</h3>
        <p>{getDescription()}</p>
        <div className={styles.info}>
          <p className={styles.author}>{author.name}</p>
          <p className={styles.date}>{dateFormmater(date)}</p>
        </div>
      </div>
      <Link href={`post/${slug}`}>View More</Link>
    </div>
  );
};
