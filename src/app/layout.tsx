// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Link from "next/link";
import SidebarIcon from "@/components/SidebarIcon";
import PlaylistPlayer from "@/components/PlaylistPlayer";
import SidebarSpotify from "@/components/SidebarSpotify";

export const metadata: Metadata = {
  title: "Luiza Portfolio",
  description: "Portfolio estilo desktop em Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="m-0 p-0 h-full min-h-screen bg-soft-gradient animate-gradient text-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-6 px-4">

          {/* Topbar no mobile */}
          <nav
            className="md:hidden sticky top-0 z-10 bg-white/80 backdrop-blur border rounded-xl px-3 py-2 mt-4"
            role="navigation"
            aria-label="Navegação principal (mobile)"
          >
            <ul className="flex flex-wrap items-center gap-3 text-sm text-zinc-900">
              <li><Link href="/about"  className="hover:underline" prefetch={false}>About</Link></li>
              <li><Link href="/resume" className="hover:underline" prefetch={false}>Resume</Link></li>
              <li><Link href="/blog"   className="hover:underline" prefetch={false}>Blog</Link></li>
              <li><Link href="/edu"    className="hover:underline" prefetch={false}>Edu</Link></li>
            </ul>
          </nav>

          {/* Sidebar só no md+ */}
          <aside
            className="hidden md:grid sticky top-6 h-[100dvh] w-[200px] py-6
                       grid-cols-2 gap-x-6 gap-y-6 justify-items-center items-start
                       overflow-y-auto"
            role="navigation"
            aria-label="Navegação principal (desktop)"
          >
            {/* REMOVIDO: Home */}
            <SidebarIcon href="/about"  label="About"  iconSrc="/images/about.png" />
            <SidebarIcon href="/resume" label="Resume" iconSrc="/images/resume.png" />
            <SidebarIcon href="/blog"   label="Blog"   iconSrc="/images/blog.png" />
            <SidebarIcon href="/edu"    label="Edu"    iconSrc="/images/education.png" />
            <SidebarIcon
              href="https://www.linkedin.com/in/luizag-rocha/"
              label="LinkedIn"
              iconSrc="/images/linkedin.png"
            />
            <SidebarIcon
              href="https://github.com/LuizaRock"
              label="GitHub"
              iconSrc="/images/github.png"
            />
            <SidebarSpotify />
          </aside>

          {/* Conteúdo principal */}
          <main id="conteudo" className="flex-1 py-6 md:py-8 pt-2 md:pt-0 text-zinc-900">
            <div className="card">{children}</div>
          </main>
        </div>

        <PlaylistPlayer />
      </body>
    </html>
  );
}
