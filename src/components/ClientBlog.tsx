// src/components/ClientBlog.tsx
"use client";
import { useEffect, useState } from "react";
import PostForm, { type PostFormOutput } from "@/components/PostForm";

type Post = {
  id: string;
  title: string;
  content: string; // HTML
  date: string;
  reactions?: Record<string, number>;
};

const KEY = "blog_posts";

export default function ClientBlog() {
  const [posts, setPosts] = useState<Post[]>([]);

  // 👇 EDITOR SÓ NO LOCALHOST. Em produção nunca aparece.
  const [canEdit] = useState<boolean>(() => {
    if (typeof window === "undefined") return false; // SSR
    return location.hostname === "localhost";
  });

  // Carrega posts do localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setPosts(JSON.parse(raw));
    } catch {}
  }, []);

  // Persist helpers
  const save = (next: Post[]) => {
    setPosts(next);
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
  };
  const add = (p: Post) => save([p, ...posts]);
  const del = (id: string) => save(posts.filter((p) => p.id !== id));
  const react = (id: string, emoji: string) => {
    const next = posts.map((p) =>
      p.id === id
        ? { ...p, reactions: { ...p.reactions, [emoji]: (p.reactions?.[emoji] || 0) + 1 } }
        : p
    );
    save(next);
  };

  function onAddFromForm(payload: PostFormOutput) {
    add({ id: payload.slug, title: payload.title, content: payload.content, date: payload.date });
  }

  return (
    <div className="space-y-6">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="text-zinc-600">Estudos, reflexões e projetos em andamento.</p>
      </header>

      {/* Form só aparece no localhost */}
      {canEdit && (
        <div className="rounded-2xl border border-zinc-200 bg-white shadow-xl p-6">
          <h2 className="text-lg font-bold mb-2">Novo post (apenas no seu ambiente local)</h2>
          <PostForm onAdd={onAddFromForm} />
        </div>
      )}

      <div className="space-y-4">
        {posts.length === 0 && (
          <p className="text-zinc-500">Nenhum post ainda. Escreve o primeiro aí 😉</p>
        )}
        {posts.map((p) => (
          <article key={p.id} className="rounded-2xl border border-zinc-200 bg-white shadow p-5">
            <header className="mb-2">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <time className="text-xs text-zinc-500">{new Date(p.date).toLocaleString()}</time>
            </header>

            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: p.content }} />

            <div className="mt-3 flex items-center justify-between">
              <div className="flex gap-2">
                {["👍", "🎉", "❤️"].map((e) => (
                  <button
                    key={e}
                    onClick={() => react(p.id, e)}
                    className="text-sm px-2 py-1 rounded border hover:bg-zinc-50"
                  >
                    {e} {p.reactions?.[e] ?? 0}
                  </button>
                ))}
              </div>
              <button
                onClick={() => del(p.id)}
                className="text-sm px-3 py-1 rounded-lg border border-red-200 text-red-600 hover:bg-red-50"
              >
                Apagar
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
