import { getFeaturedPosts } from "@/service/post";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
  // 1. 모든 포스트 데이터를 읽어와야 한다
  const posts = await getFeaturedPosts();
  // 2. 모든 포스트 데이터를 보여줘야 한다
  return (
    <section className="my-6">
      <h2 className="text-2xl font-bold my-2">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
