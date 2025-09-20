"use client";

import { posts } from "@/lib/posts";
import Link from "next/link";

export default function PostsModalList() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Todos os posts</h2>

      <ul className="space-y-2">
        {posts.map((p) => (
          <li key={p.slug} className="rounded-lg border p-3 hover:bg-black/5">
            <Link href={`/posts/${p.slug}`} className="font-medium">
              {p.title}
            </Link>
            {p.excerpt && (
              <p className="text-sm">{p.excerpt}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
