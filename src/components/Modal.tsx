"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function Modal({ open, onClose, title, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  // Garante que só renderiza no cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  // Fecha no ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop que fecha o modal ao clicar */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Conteúdo do modal */}
      <div
        className="relative w-full max-w-lg rounded-2xl border border-zinc-200 bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()} // Impede que clique interno feche
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-200/60">
          <h2 className="text-lg font-semibold text-zinc-900">
            {title ?? "Modal"}
          </h2>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="rounded-lg px-2 py-1 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800"
          >
            ✕
          </button>
        </div>

        <div className="px-5 py-4 text-zinc-800">{children}</div>

        <div className="flex items-center justify-end gap-2 px-5 pb-5">
          <button
            onClick={onClose}
            className="rounded-xl px-4 py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-800"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
