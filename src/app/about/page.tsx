import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post não encontrado" };
  return {
    title: `${post.title} — Blog da Luiza`,
    description: post.excerpt,
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose prose-zinc max-w-none">
      <h1>{post.title}</h1>
      <p className="text-sm text-zinc-500">{post.date} — {post.author}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
