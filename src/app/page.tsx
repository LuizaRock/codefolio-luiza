import Link from "next/link";
import { posts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function HomePage() {
  const latest = posts.slice(0, 3);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Últimos posts</h1>

      <div className="grid gap-4">
        {latest.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>

      <Link href="/blog" className="inline-block rounded-lg border px-4 py-2">
        Ver todos
      </Link>
    </div>
  );
}
