import { getMayLikePosts } from "@/service/post";
import PostCarousel from "./PostCarousel";

export default async function YouMayLike() {
  const posts = await getMayLikePosts();
  return (
    <section>
      <h2 className="text-2xl font-bold my-2">You May Like</h2>
      <PostCarousel posts={posts} />
    </section>
  );
}
