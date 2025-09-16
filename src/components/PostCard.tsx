import Link from "next/link";
import type { Post } from "@/types/post";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="border border-zinc-200 rounded-xl p-4 hover:shadow transition">
      <h3 className="text-lg font-semibold">
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="text-sm text-zinc-600">
        {new Date(post.date).toLocaleDateString("pt-PT")} • {post.author}
      </p>
      <p className="mt-2">{post.excerpt}</p>
      <p className="mt-3">
        <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:underline">
          Ler mais →
        </Link>
      </p>
    </article>
  );
}
