// 비즈니스 로직을 담당하는 모듈

import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === fileName);
  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length ? posts[index + 1] : null;
  const content = await readFile(filePath, "utf-8");
  return { ...post, content, next, prev };
}

export async function getMayLikePosts(): Promise<Post[]> {
  return getAllPosts().then((post) => post.filter((post) => !post.featured));
}

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

// 현재 프로세스가 동작하고 있는 프로젝트 경로 받아오기 (프로젝트 안의 data 폴더 안에 있는 post.json)
// promise에 있는 readfile로 import 해와서 promise를 반환하도록 하기
// 배열로 반환된 json에서 최신 포스트가 제일 위로 오도록 날짜 정렬
// json으로 parse되는 타입이 post의 배열 타입이라고 명시 (generic으로)
