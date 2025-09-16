import { notFound } from "next/navigation";
import LikeButton from "@/components/LikeButton";
import { posts, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  return { title: post ? post.title : "Post" };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <article className="prose prose-zinc max-w-none">
      <h1>{post.title}</h1>
      <p className="text-sm text-zinc-600">
        {new Date(post.date).toLocaleDateString("pt-PT")} • {post.author}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <div className="mt-4">
        <LikeButton />
      </div>
    </article>
  );
}
