import { Post } from "@/service/post";
import MultiCarousel from "./MultiCarousel";
import PostCard from "./PostCard";

export default function PostCarousel({ posts }: { posts: Post[] }) {
  return (
    <MultiCarousel>
      {posts.map((post) => (
        <PostCard key={post.path} post={post} />
      ))}
    </MultiCarousel>
  );
}
