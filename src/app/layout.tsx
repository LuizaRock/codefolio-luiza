import type { Metadata } from "next";
import "./globals.css";
import SidebarIcon from "@/components/SidebarIcon";

export const metadata: Metadata = {
  title: "Luiza — Portfolio",
  description: "Portfolio estilo desktop em Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
    <body className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50">        
      <div className="max-w-7xl mx-auto grid grid-cols-[88px,1fr] gap-6 px-4">
          <aside className="sticky top-0 h-[100dvh] w-[88px] py-6 flex flex-col items-center gap-4">
            <SidebarIcon href="/"          label="Home"       iconSrc="/images/home.png" />
            <SidebarIcon href="/about"     label="About me"   iconSrc="/images/aboutme.png" />
            <SidebarIcon href="/resume"    label="Resume"     iconSrc="/images/resume.png" />
            <SidebarIcon href="/blog"      label="Blog"       iconSrc="/images/blog.png" />
            <SidebarIcon href="/education" label="Education"  iconSrc="/images/education.png" />
            <SidebarIcon href="/email"     label="Email"      iconSrc="/images/email.png" />
            <SidebarIcon href="/linkedin"  label="LinkedIn"   iconSrc="/images/linkedin.png" />
            <SidebarIcon href="/github"    label="GitHub"     iconSrc="/images/github.png" />
            <SidebarIcon href="/spotify"   label="Spotify"    iconSrc="/images/spotify.png" />
  </aside>



          <main className="py-8 pb-28">{children}</main>
        </div>
      </body>
    </html>
  );
}
