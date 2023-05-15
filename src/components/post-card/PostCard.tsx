import Image from "next/image";
import Link from "next/link";

import { dateFormmater } from "@/helpers/dateFormatter";
import { textFormatterLenght } from "@/helpers/textFormatterLegth";
import { Post } from "@/types/post.type";

import styles from "./PostCard.module.scss";

export const PostCard = ({ post }: { post: Post }) => {
  console.log(post);

  const { title, author, content, coverImage, slug, date, seo } = post;
  const getDescription = () => {
    const htmlToText = content.html.replace(/<[^>]*>?/gm, "");
    return textFormatterLenght(htmlToText, 96);
  };
  if (!post) return null;
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={coverImage.url}
          alt={seo}
          width={500}
          height={500}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.contentTitle}>
          {textFormatterLenght(title, 32)}
        </h3>
        <p className={styles.contentDescription}>{getDescription()}</p>
        <div className={styles.contentInfo}>
          <p>{author.name}</p>
          <p>{dateFormmater(date)}</p>
        </div>
      </div>
      <Link className={styles.contentMore} href={`post/${slug}`}>
        View More
      </Link>
    </div>
  );
};
