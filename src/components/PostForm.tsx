"use client";
import { useState } from "react";

export default function PostForm({ onAdd }: { onAdd: (p: any) => void }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const t = title.trim();
    const c = content.trim();
    if (!t || !c) return;

    const slugBase = t.toLowerCase().replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "");
    const slug = `${slugBase}-${Date.now()}`;

    onAdd({
      slug,
      title: t,
      content: `<p>${c}</p>`,
      date: new Date().toISOString(),
      author: "Luiza",
    });

    setTitle("");
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título do post"
        className="w-full rounded-xl border border-zinc-300 px-3 py-2"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Escreva aqui..."
        rows={5}
        className="w-full rounded-xl border border-zinc-300 px-3 py-2"
      />
      <div className="flex items-center justify-end">
        <button
          type="submit"
          className="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
        >
          Salvar post
        </button>
      </div>
    </form>
  );
}
