"use client";

import { useState } from "react";
import Modal from "@/components/Modal";

export default function AboutPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">About</h1>

      <button
        onClick={() => setOpen(true)}
        className="rounded-xl bg-pink-500 text-white px-4 py-2 hover:bg-pink-600"
      >
        Abrir modal (About)
      </button>

      <Modal open={open} onClose={() => setOpen(false)} title="Sobre a Luiza">
        <p>Aqui você pode colocar contato, CV, foto, etc.</p>
      </Modal>
    </div>
  );
}
