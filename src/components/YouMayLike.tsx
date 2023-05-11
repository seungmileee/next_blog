import { getMayLikePosts } from "@/service/post";
import PostCarousel from "./PostCarousel";

export default async function YouMayLike() {
  const posts = await getMayLikePosts();
  return (
    <section className="mb-6 mt-10">
      <h2 className="text-2xl font-bold my-2">You May Like</h2>
      <PostCarousel posts={posts} />
    </section>
  );
}
