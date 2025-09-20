import { posts } from "@/lib/posts";
import Link from "next/link";

export const metadata = { title: "Blog — Luiza" };

export default function BlogPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Blog</h1>
      <ul className="grid gap-4">
        {posts.map((p) => (
          <li key={p.slug} className="rounded-lg border p-4 hover:bg-zinc-50">
            <Link className="font-medium underline" href={`/posts/${p.slug}`}>
              {p.title}
            </Link>
            <div className="text-xs text-zinc-500">
              {new Date(p.date).toLocaleDateString("pt-PT")} • {p.author}
            </div>
            <p className="text-sm text-zinc-700 mt-1">{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
