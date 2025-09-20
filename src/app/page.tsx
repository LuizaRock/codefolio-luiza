import { posts as seeds } from "@/lib/posts";
import PostsGridClient from "@/components/PostsGridClient";

export default function HomePage() {
  return <PostsGridClient seeds={seeds} />;
}
