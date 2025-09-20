"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  content: string;
};

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
      // Tenta buscar no localStorage sempre
      const arr: Post[] = JSON.parse(localStorage.getItem("extraPosts") || "[]");
      const found = arr.find((p) => p.slug === slug) || initialPost || null;
      setPost(found);
    } catch {
      setPost(initialPost || null);
    } finally {
      setLoading(false);
    }
  }, [slug, initialPost]);

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
          <Link href="/blog" className="text-blue-600 hover:underline">
            ← Voltar ao Blog
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="prose prose-zinc mx-auto p-6">
      <h1 className="mb-2">{post.title}</h1>
      <p className="text-sm text-zinc-500">
        {post.date} • {post.author}
      </p>

      <div
        className="mt-6"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="mt-10">
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← Voltar ao Blog
        </Link>
      </div>
    </article>
  );
}
