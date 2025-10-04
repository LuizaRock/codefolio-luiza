// src/components/PostClient.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Post } from "@/types/post"; // ← usa o MESMO tipo do projeto
import LikeButton from "@/components/LikeButton";


export default function PostClient({
  slug,
  initialPost,
}: {
  slug: string;
  initialPost: Post | null;
}) {
  const [post, setPost] = useState<Post | null>(initialPost);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const arr: Post[] = JSON.parse(localStorage.getItem("extraPosts") || "[]");
      const found = arr.find((p) => p.slug === slug) || initialPost || null;
      setPost(found);
    } catch {
      setPost(initialPost || null);
    } finally {
      setLoading(false);
    }
  }, [slug, initialPost]);

  const backHref = "/blog"; // se não tiver /blog, troque para "/"

  if (loading) {
    return (
      <article className="mx-auto p-6 max-w-2xl text-zinc-600">
        Carregando post…
      </article>
    );
  }

  if (!post) {
    return (
      <article className="mx-auto p-6 max-w-2xl">
        <h1 className="text-2xl font-semibold mb-2">Página não encontrada</h1>
        <p className="text-zinc-600">
          O conteúdo que você tentou abrir não existe ou foi movido.
        </p>
        <div className="mt-6">
          <Link href={backHref} className="text-blue-600 hover:underline">
            ← Voltar ao Blog
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="prose prose-neutral dark:prose-invert mx-auto p-6">
      <h1 className="mb-1">{post.title}</h1>
      <p className="text-sm text-zinc-500">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("pt-PT")}
        </time>{" "}
        • {post.author}
      </p>

      <div className="mt-6" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="mt-6">
          <LikeButton slug={slug} />
      </div>

    </article>
  );
}
