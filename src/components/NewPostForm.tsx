"use client";
import PostForm from "@/components/PostForm";

export default function NewPostForm() {
  function savePost(p: any) {
    try {
      const arr = JSON.parse(localStorage.getItem("extraPosts") || "[]");
      arr.push(p);
      localStorage.setItem("extraPosts", JSON.stringify(arr));
    } catch {
      // ignore
    }
  }

  return (
    <div className="card p-6 border border-zinc-200 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Novo post</h2>
      <PostForm onAdd={savePost} />
    </div>
  );
}
