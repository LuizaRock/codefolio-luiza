"use client";

import { useState } from "react";
import Modal from "@/components/Modal";

export default function BlogPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Blog</h1>

      <button
        onClick={() => setOpen(true)}
        className="rounded-xl bg-pink-500 text-white px-4 py-2 hover:bg-pink-600"
      >
        Abrir modal (Blog)
      </button>

      <Modal open={open} onClose={() => setOpen(false)} title="Notas do Blog">
        <p>Use isso pra filtros, newsletter, preview de post, etc.</p>
      </Modal>
    </div>
  );
}
