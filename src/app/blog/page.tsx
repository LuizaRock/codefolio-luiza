// src/app/blog/page.tsx
import { posts as seeds } from "@/lib/posts";
import PostsGridClient from "@/components/PostsGridClient";

export default function BlogPage() {
  return <PostsGridClient seeds={seeds} />;
}
