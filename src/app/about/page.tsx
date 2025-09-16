import PostCard from "@/components/PostCard";
import { posts } from "@/lib/posts";
import Window from "@/components/Window";

export default function HomePage() {
  return (
    <Window title="Blog da Luiza">
      <p className="text-zinc-600">Um blog minimalista feito com Next.js App Router.</p>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {posts.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </Window>
  );
}
