import { getPostBySlug } from "@/lib/posts";
import PostClient from "@/components/PostClient";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // 👈 precisa do await
  const initialPost = getPostBySlug(slug) || null;

  return <PostClient slug={slug} initialPost={initialPost} />;
}
