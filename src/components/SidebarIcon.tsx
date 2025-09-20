"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface SidebarIconProps {
  href?: string;           // agora opcional
  label: string;
  iconSrc: string;
  onClick?: () => void;
}

export default function SidebarIcon({
  href = "",
  label,
  iconSrc,
  onClick,
}: SidebarIconProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isModalLink = href.startsWith("?"); // não quebra mais porque href="" no default

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    if (isModalLink) {
      router.push(href);
    }
  };

  const content = (
    <div
      onClick={handleClick}
      className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-white/60 transition text-center cursor-pointer"
      aria-label={label}
    >
      <img src={iconSrc} alt={label} className="h-8 w-8" />
      <span className="text-xs">{label}</span>
    </div>
  );

  if (href && href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  if (href && !isModalLink) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
