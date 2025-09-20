"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { Post } from "@/types/post";

const LS_USER_POSTS = "extraPosts";
const LS_DELETED = "deletedSlugs";

export default function PostsGridClient({ seeds }: { seeds: Post[] }) {
  const [userPosts, setUserPosts] = useState<Post[]>([]);
  const [deleted, setDeleted] = useState<string[]>([]);

  // Set de slugs dos seeds (para sabermos quem NÃO pode ser apagado)
  const seedSlugs = useMemo(() => new Set(seeds.map(s => s.slug)), [seeds]);

  useEffect(() => {
    try {
      const up = JSON.parse(localStorage.getItem(LS_USER_POSTS) || "[]");
      const del = JSON.parse(localStorage.getItem(LS_DELETED) || "[]");

      if (Array.isArray(up) && up.length > 0) setUserPosts(up);
      if (Array.isArray(del)) setDeleted(del.filter((s: string) => !seedSlugs.has(s))); // filtra seeds
    } catch {}
  }, [seedSlugs]);

  const merged = useMemo(() => {
    const map = new Map<string, Post>();
    // seeds sempre entram
    for (const p of seeds) map.set(p.slug, p);
    // posts do usuário sobrescrevem
    for (const p of userPosts) map.set(p.slug, p);
    // deletados removem APENAS posts do usuário
    for (const s of deleted) {
      if (!seedSlugs.has(s)) map.delete(s);
    }
    return Array.from(map.values()).sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [seeds, userPosts, deleted, seedSlugs]);

  const previewFromHTML = (html: string, max = 120) => {
    const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    return text.length > max ? text.slice(0, max) + "…" : text;
  };

  function handleDelete(slug: string) {
    // só permite apagar posts do usuário
    if (seedSlugs.has(slug)) return;
    const next = Array.from(new Set([...deleted, slug]));
    setDeleted(next);
    try { localStorage.setItem(LS_DELETED, JSON.stringify(next)); } catch {}
  }

  const isUserPost = (slug: string) => !seedSlugs.has(slug);

  return (
    <section className="space-y-12">
      <div className="card space-y-4 text-center p-8">
        <h1 className="text-4xl font-bold">Bem-vindo ao CodeFolio</h1>
        <p className="text-lg text-zinc-700 leading-relaxed max-w-2xl mx-auto">
          Um blog pessoal simples em Next.js para compartilhar estudos, ideias e projetos.
        </p>
        <div className="flex justify-center mt-4">
          <img
            src="/images/dev.gif"
            alt="Animação"
            className="w-28 md:w-40 rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {merged.map((p) => (
          <div
            key={p.slug}
            className="card p-6 border border-zinc-200 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all"
          >
            <Link href={`/posts/${p.slug}`}>
              <h2 className="text-xl font-semibold text-zinc-800">{p.title}</h2>
              <p className="text-sm text-zinc-500">{p.date} • {p.author}</p>
              <p className="text-zinc-700 mt-3">{previewFromHTML(p.content)}</p>
            </Link>

            {/* Botão Apagar só aparece para posts do usuário */}
            {isUserPost(p.slug) && (
              <div className="mt-3 flex justify-end">
                <button
                  onClick={() => handleDelete(p.slug)}
                  className="text-rose-600 text-sm hover:underline"
                >
                  Apagar
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
