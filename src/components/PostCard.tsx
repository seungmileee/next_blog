import { Post } from "@/service/post";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({
  post: { title, description, date, category, path },
}: {
  post: Post;
}) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="rounded-md overflow-hidden shadow-lg">
        <Image
          className="w-full"
          src={`/image/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center p-4">
          <time className="self-end">{date.toString()}</time>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          <span className="text-sm rounded-lg bg-green-100 px-2 my-3">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
