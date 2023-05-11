import FilterablePost from "@/components/FilterablePost";
import { getAllPosts } from "@/service/post";

export default async function PostsPage() {
  const posts = await getAllPosts();
  // 중복제거 후, 고유한 카테고리 아이템만 담은 배열 완성
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <section className="my-6">
      <h2 className="text-2xl font-bold my-2">Posts</h2>
      <FilterablePost posts={posts} categories={categories} />
    </section>
  );
}
