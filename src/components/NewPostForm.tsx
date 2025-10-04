// src/components/NewPostForm.tsx
"use client";
import PostForm, { type PostFormOutput } from "@/components/PostForm";

export default function NewPostForm() {
  function savePost(p: PostFormOutput) {
    try {
      const arr: PostFormOutput[] = JSON.parse(localStorage.getItem("extraPosts") || "[]");
      arr.push(p);
      localStorage.setItem("extraPosts", JSON.stringify(arr));
    } catch {}
  }

  return (
    <div className="card p-6 border border-zinc-200 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Novo post</h2>
      <PostForm onAdd={savePost} />
    </div>
  );
}
