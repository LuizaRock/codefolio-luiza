"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [animate, setAnimate] = useState(false);

  function handleClick() {
    setLikes(likes + 1);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300); // reseta animação
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-4 py-2 rounded-lg
                 bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
    >
      <span className={`text-xl ${animate ? "animate-bounce-once" : ""}`}>
        👍
      </span>
      Curtir {likes > 0 && `(${likes})`}
    </button>
  );
}
