import Link from "next/link";
import Image from "next/image";

type Props = {
  href: string;
  label: string;
  iconSrc?: string;   // usa imagem se vier
  emoji?: string;     // fallback
};

export default function SidebarIcon({ href, label, iconSrc, emoji = "📦" }: Props) {
  return (
    <Link
      href={href}
      className="group grid place-items-center gap-1 no-underline"
      aria-label={label}
    >
      <div className="w-14 h-14 rounded-2xl bg-white/70 backdrop-blur border border-white/70 shadow grid place-items-center overflow-hidden transition-transform duration-150 group-hover:scale-105">
        {iconSrc ? (
          <Image src={iconSrc} alt={label} width={56} height={56} />
        ) : (
          <span className="text-3xl">{emoji}</span>
        )}
      </div>
      <span className="text-xs font-medium text-zinc-800/80 group-hover:text-zinc-900">
        {label}
      </span>
    </Link>
  );
}
