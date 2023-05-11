"use client";

import { Post } from "@/service/post";
import { useState } from "react";
import Categories from "./Categories";
import PostsGrid from "./PostsGrid";

type Props = {
  posts: Post[];
  categories: string[];
};

export default function FilterablePost({ posts, categories }: Props) {
  const [selected, setSelected] = useState("All Posts");
  const filtered =
    selected === "All Posts"
      ? posts
      : posts.filter((post) => post.category === selected);
  return (
    <section className="flex m-4">
      <PostsGrid posts={filtered} />
      <Categories
        categories={["All Posts", ...categories]}
        selected={selected}
        onClick={(selected) => setSelected(selected)}
      />
    </section>
  );
}
