"use client";

import { useEffect, useState } from "react";

type Props = {
  slug: string;        // usado pra salvar por post
  initial?: number;    // opcional
};

export default function LikeButton({ slug, initial = 0 }: Props) {
  const storageKey = `likes:${slug}`;
  const [count, setCount] = useState(initial);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    try {
      const saved = Number(localStorage.getItem(storageKey));
      if (!Number.isNaN(saved) && saved > 0) setCount(saved);
    } catch {}
  }, [storageKey]);

  function handleClick() {
    if (pressed) return;            // evita spam durante animação
    setPressed(true);
    setCount((c) => {
      const next = c + 1;
      try { localStorage.setItem(storageKey, String(next)); } catch {}
      return next;
    });
    setTimeout(() => setPressed(false), 200);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={pressed}
      aria-label="Curtir este post"
      className={[
        "inline-flex items-center gap-2 rounded-full border px-4 py-2",
        "transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        pressed ? "scale-105" : "hover:scale-105",
      ].join(" ")}
    >
      <span
        className={[
          "text-xl leading-none transition-transform",
          pressed ? "translate-y-[-1px] scale-125" : "",
        ].join(" ")}
      >
        ❤️
      </span>
      <span className="text-sm font-medium">{count}</span>
    </button>
  );
}
