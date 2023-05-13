import Image from "next/image";
import Link from "next/link";

import { dateFormmater } from "@/helpers/dateFormatter";
import { textFormatterLenght } from "@/helpers/textFormatterLegth";
import { Post } from "@/types/post.type";

export const PostCard = ({ post }: { post: Post }) => {
  const { title, author, content, coverImage, slug, date, seo } = post;
  const getDescription = () => {
    const htmlToText = content.html.replace(/<[^>]*>?/gm, "");
    return textFormatterLenght(htmlToText, 96);
  };

  return (
    <div>
      <Image src={coverImage.url} alt={seo} width={100} height={100} />
      <div>
        <h3>{textFormatterLenght(title, 32)}</h3>
        <p>{getDescription()}</p>
        <div>
          <p>{author.name}</p>
          <p>{dateFormmater(date)}</p>
        </div>
      </div>
      <Link href={`post/${slug}`}>View More</Link>
    </div>
  );
};
