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
    <html lang="pt-BR" className="h-full">
      <body className="m-0 p-0 h-full min-h-screen bg-soft-gradient text-black">
        <div className="max-w-7xl mx-auto flex flex-row items-start gap-6 px-4">
          <aside className="sticky top-0 h-[100dvh] w-[200px] py-6 grid grid-cols-2 justify-items-center content-start gap-y-4 gap-x-2 overflow-y-auto">
            <SidebarIcon href="/"         label="Home"    iconSrc="/images/home.png" />
            <SidebarIcon href="/about"    label="About"   iconSrc="/images/about.png" />
            <SidebarIcon href="/resume"   label="Resume"  iconSrc="/images/resume.png" />
            <SidebarIcon href="/blog"     label="Blog"    iconSrc="/images/blog.png" />

            {/* continuam normais */}
            <SidebarIcon href="/education" label="Edu"     iconSrc="/images/education.png" />
            <SidebarIcon href="/email"     label="Email"   iconSrc="/images/email.png" />
            <SidebarIcon href="/linkedin"  label="LinkedIn" iconSrc="/images/linkedin.png" />
            <SidebarIcon href="/github"    label="GitHub"  iconSrc="/images/github.png" />
            <SidebarIcon href="/spotify"   label="Spotify" iconSrc="/images/spotify.png" />
          </aside>

          <main className="flex-1 py-8">
            <div className="bg-white/90 rounded-2xl shadow-md p-8 min-h-[500px]">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
