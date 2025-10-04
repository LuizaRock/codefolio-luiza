// src/components/SidebarIcon.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

type Props = {
  label: string;
  iconSrc: string;
  href?: string;             // agora é opcional
  onClick?: () => void;      // ação alternativa
  external?: boolean;        // força externo se quiser
};

export default function SidebarIcon({ href, label, iconSrc, onClick, external }: Props) {
  const classes =
    "flex flex-col items-center gap-1 text-xs text-zinc-900 hover:text-blue-600 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded";

  // Caso BOTÃO (sem href)
  if (!href && onClick) {
    return (
      <button
        type="button"
        aria-label={label}
        className={classes}
        onClick={onClick}
      >
        <Image src={iconSrc} alt="" width={40} height={40} className="w-10 h-10 object-contain" />
        <span>{label}</span>
      </button>
    );
  }

  // Se não tem href nem onClick: não renderiza e avisa no console (evita crash)
  if (!href) {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.warn(`SidebarIcon: faltou 'href' ou 'onClick' para "${label}"`);
    }
    return null;
  }

  // Link (interno ou externo)
  const isExternal = typeof href === "string" && (external ?? /^https?:\/\//.test(href));

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={classes}
      >
        <Image src={iconSrc} alt="" width={40} height={40} className="w-10 h-10 object-contain" />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <Link href={href} aria-label={label} className={classes} prefetch={false}>
      <Image src={iconSrc} alt="" width={40} height={40} className="w-10 h-10 object-contain" />
      <span>{label}</span>
    </Link>
  );
}
