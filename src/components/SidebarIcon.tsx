import Link from "next/link";
import Image from "next/image";

type Props = {
  href: string;
  label: string;
  iconSrc?: string;
  emoji?: string;
};

export default function SidebarIcon({ href, label, iconSrc, emoji = "📦" }: Props) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-white/60 transition no-underline text-center"
      aria-label={label}
    >
      <div className="w-14 h-14 rounded-2xl bg-white/70 backdrop-blur border border-white/70 shadow grid place-items-center overflow-hidden">
        {iconSrc ? (
          <Image src={iconSrc} alt={label} width={36} height={36} />
        ) : (
          <span className="text-3xl">{emoji}</span>
        )}
      </div>
      {/* limita largura do texto pra caber na coluna */}
      <span className="text-[11px] leading-tight font-medium text-zinc-700 max-w-[84px]">
        {label}
      </span>
    </Link>
  );
}
