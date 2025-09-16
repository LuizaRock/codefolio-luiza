"use client";
import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  return (
    <button
      className="border border-zinc-300 rounded-full px-3 py-1 text-sm hover:bg-zinc-50 active:translate-y-px"
      onClick={() => setLikes((l) => l + 1)}
      aria-label="Curtir este post"
    >
      👍 Curtir {likes > 0 ? `(${likes})` : ""}
    </button>
  );
}
