import type { Metadata } from "next";
import "./globals.css";
import SidebarIcon from "@/components/SidebarIcon";
import React from "react";

export const metadata: Metadata = {
  title: "Luiza Portfolio",
  description: "Portfolio estilo desktop em Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50">
        <div className="max-w-7xl mx-auto flex flex-row items-start gap-6 px-4">
          {/* Sidebar em DUAS COLUNAS */}
          <aside className="sticky top-0 h-[100dvh] w-[200px] py-6
                           grid grid-cols-2 justify-items-center content-start
                           gap-y-4 gap-x-2 overflow-y-auto">
            <SidebarIcon href="/"          label="Home"      iconSrc="/images/home.png" />
            <SidebarIcon href="/about"     label="About"     iconSrc="/images/about.png" />
            <SidebarIcon href="/resume"    label="Resume"    iconSrc="/images/resume.png" />
            <SidebarIcon href="/blog"      label="Blog"      iconSrc="/images/blog.png" />
            <SidebarIcon href="/education" label="Edu"       iconSrc="/images/education.png" />
            <SidebarIcon href="/email"     label="Email"     iconSrc="/images/email.png" />
            <SidebarIcon href="/linkedin"  label="LinkedIn"  iconSrc="/images/linkedin.png" />
            <SidebarIcon href="/github"    label="GitHub"    iconSrc="/images/github.png" />
            <SidebarIcon href="/spotify"   label="Spotify"   iconSrc="/images/spotify.png" />
          </aside>

          <main className="flex-1 py-8">
            <div className="bg-white/80 backdrop-blur-lg border border-white/60 rounded-2xl shadow-xl p-8 min-h-[500px]">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
