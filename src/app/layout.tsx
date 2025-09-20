// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import React from "react";
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
        <div className="max-w-7xl mx-auto flex flex-row items-start gap-6 px-4">
          <aside
            className="sticky top-6 h-[100dvh] w-[200px] py-6
                       grid grid-cols-2 gap-x-6 gap-y-6 justify-items-center items-start
                       overflow-y-auto"
          >
            {/* Navegação interna */}
            <SidebarIcon href="/"        label="Home"   iconSrc="/images/home.png" />
            <SidebarIcon href="/about"   label="About"  iconSrc="/images/about.png" />
            <SidebarIcon href="/resume"  label="Resume" iconSrc="/images/resume.png" />
            <SidebarIcon href="/blog"    label="Blog"   iconSrc="/images/blog.png" />
            <SidebarIcon href="/edu"     label="Edu"    iconSrc="/images/education.png" />
            <SidebarIcon href="/email"   label="Email"  iconSrc="/images/email.png" />

            {/* Externos — usa o href completo no próprio SidebarIcon */}
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

            {/* Spotify (toggle do player) */}
            <SidebarSpotify />
          </aside>

          <main className="flex-1 py-8">
            <div className="card">{children}</div>
          </main>
        </div>

        <PlaylistPlayer />
      </body>
    </html>
  );
}
