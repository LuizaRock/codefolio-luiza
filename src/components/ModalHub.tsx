"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import PostsModalList from "./PostsModalList";

export default function ModalHub() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // garante target do portal só no client
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setPortalTarget(document.body);
  }, []);

  const modal = searchParams.get("modal");
  if (!portalTarget || !modal) return null;

  const close = () => {
    const sp = new URLSearchParams(searchParams.toString());
    sp.delete("modal");
    const qs = sp.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  let title = "";
  let content: React.ReactNode = null;

  switch (modal) {
    case "home":
      title = "Home";
      content = <div>Bem-vinda ao meu portfólio 🚀</div>;
      break;
    case "about":
      title = "Sobre mim";
      content = <div>Seu texto rápido de apresentação aqui.</div>;
      break;
    case "resume":
      title = "Currículo";
      content = (
        <iframe
          src="/resume.pdf"
          className="w-full h-[70vh] rounded-lg border"
          title="Currículo"
        />
      );
      break;
    case "blog":
      title = "Blog";
      content = <PostsModalList />;
      break;
    default:
      return null;
  }

  const modalNode = (
    <div
      aria-modal
      role="dialog"
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* backdrop que fecha o modal */}
      <div className="absolute inset-0 bg-black/50" onClick={close} />

      {/* conteúdo do modal */}
      <div
        className="relative z-10 w-full max-w-2xl rounded-xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()} // impede que clique interno feche
      >
        <button
          onClick={close}
          className="absolute right-3 top-3 rounded-md px-2 py-1 text-sm hover:bg-black/10"
        >
          ✕
        </button>
        {title && <h2 className="mb-4 text-xl font-bold">{title}</h2>}
        {content}
      </div>
    </div>
  );

  return createPortal(modalNode, portalTarget);
}
