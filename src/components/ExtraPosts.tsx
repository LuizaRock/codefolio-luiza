"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { posts as staticPosts } from "@/lib/posts";

type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  content: string;
  emoji?: string;
};

// Função auxiliar para gerar preview
function previewFromHTML(html: string, max = 120) {
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return text.length > max ? text.slice(0, max) + "…" : text;
}

export default function ExtraPosts() {
  const [allPosts, setAllPosts] = useState<Post[]>([]);

  useEffect(() => {
    const key = "extraPosts";

    // Lê os já salvos
    let stored: Post[] = JSON.parse(localStorage.getItem(key) || "[]");

    // Se ainda não tem nada no localStorage, inicializa com os estáticos
    if (stored.length === 0) {
      stored = staticPosts;
      localStorage.setItem(key, JSON.stringify(stored));
    }

    setAllPosts(stored);
  }, []);

  function handleDelete(slug: string) {
    const key = "extraPosts";
    const updated = allPosts.filter((p) => p.slug !== slug);
    setAllPosts(updated);
    localStorage.setItem(key, JSON.stringify(updated));
  }

  if (!allPosts.length) return null;

  return (
    <>
      {allPosts.map((p) => (
        <div
          key={p.slug}
          className="card p-6 border border-zinc-200 rounded-xl shadow-sm flex flex-col justify-between"
        >
          <Link href={`/posts/${p.slug}`}>
            <h2 className="text-xl font-semibold text-zinc-800">
              {p.emoji ? <span className="mr-2">{p.emoji}</span> : null}
              {p.title}
            </h2>
            <p className="text-sm text-zinc-500">{p.date} • {p.author}</p>
            <p className="text-zinc-700 mt-3">{previewFromHTML(p.content)}</p>
          </Link>

          {/* Botão de apagar */}
          <button
            onClick={() => handleDelete(p.slug)}
            className="mt-4 self-end text-red-500 hover:underline text-sm"
          >
            🗑️ Apagar
          </button>
        </div>
      ))}
    </>
  );
}
