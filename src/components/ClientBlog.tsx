"use client";
import { useEffect, useState } from "react";
import PostForm from "@/components/PostForm";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type Post = {
  id: string;
  title: string;
  content: string;
  date: string;
  reactions?: Record<string, number>;
};

const KEY = "blog_posts";

export default function ClientBlog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem(KEY);
    if (raw) setPosts(JSON.parse(raw));
  }, []);

  function save(next: Post[]) {
    setPosts(next);
    localStorage.setItem(KEY, JSON.stringify(next));
  }

  function add(p: Post) {
    save([p, ...posts]);
  }

  function del(id: string) {
    save(posts.filter((p) => p.id !== id));
  }

  function react(id: string, emoji: string) {
    const next = posts.map((p) =>
      p.id === id
        ? {
            ...p,
            reactions: {
              ...p.reactions,
              [emoji]: (p.reactions?.[emoji] || 0) + 1,
            },
          }
        : p
    );
    save(next);
  }

  return (
    <div className="space-y-6">
      {/* Caixa de novo post */}
      <div className="rounded-2xl border border-zinc-200 bg-white shadow-xl p-6">
        <h2 className="text-lg font-bold mb-2">Novo post</h2>
        <PostForm onAdd={add} />
      </div>

      {/* Lista de posts */}
      <div className="space-y-4">
        {posts.length === 0 && (
          <p className="text-zinc-500">
            Nenhum post ainda. Escreve o primeiro aí 😉
          </p>
        )}
        {posts.map((p) => (
          <article
            key={p.id}
            className="rounded-2xl border border-zinc-200 bg-white shadow p-5"
          >
            <header className="mb-2">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <time className="text-xs text-zinc-500">
                {new Date(p.date).toLocaleString()}
              </time>
            </header>

            {/* Conteúdo em Markdown + HTML */}
            <div className="prose max-w-none">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {p.content}
              </ReactMarkdown>
            </div>

            {/* Botão apagar */}
            <div className="mt-3 flex justify-end">
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
