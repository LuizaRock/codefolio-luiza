// src/types/post.ts
export type Post = {
  slug: string;
  title: string;
  date: string;     // ISO
  author: string;   // ← obrigatório
  content: string;  // HTML ou MDX renderizado
  excerpt?: string;
};
