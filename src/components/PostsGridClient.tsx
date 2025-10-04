// src/components/PostsGridClient.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/types/post";


export default function PostsGridClient({ seeds }: { seeds: Post[] }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 space-y-12">
      <div className="card space-y-4 text-center p-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
          Bem-vindo ao CodeFolio
        </h1>
        <p className="text-base sm:text-lg text-zinc-900 leading-relaxed max-w-2xl mx-auto">
          Um blog pessoal simples em Next.js para compartilhar estudos, ideias e projetos.
        </p>
        <div className="flex justify-center mt-4">
          <Image
            src="/images/dev.gif"
            alt="Animação de desenvolvimento"
            width={160}
            height={160}
            className="w-28 md:w-40 h-auto rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>

      {/* Grid responsivo: 1 → 2 → 3 colunas */}
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {seeds.map((p) => {
          const d = new Date(p.date);
          const formatted = isNaN(d.getTime())
            ? p.date
            : d.toLocaleDateString("pt-PT", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              });

          return (
            <li
              key={p.slug}
              className="card p-6 border border-zinc-200 rounded-xl shadow-sm transition hover:shadow-md hover:scale-[1.02] focus-within:shadow-md"
            >
              <Link
                href={`/posts/${p.slug}`}
                className="group outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-md"
                aria-label={`Abrir post: ${p.title}`}
              >
                <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 group-hover:underline">
                  {p.title}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-zinc-800">
                  <time dateTime={p.date}>{formatted}</time> • {p.author}
                </p>
                {p.excerpt && (
                  <p className="mt-3 text-sm leading-relaxed text-zinc-900">
                    {p.excerpt}
                  </p>
                )}
                <span className="mt-4 inline-block text-sm font-medium text-blue-700 group-hover:underline">
                  Ler post →
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
