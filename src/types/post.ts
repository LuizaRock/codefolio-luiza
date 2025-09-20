// src/types/post.ts
export type Post = {
  slug: string;
  title: string;
  excerpt?: string;
  date: string;
  author: string;
  content: string; // HTML simples, pode ter emojis
};
