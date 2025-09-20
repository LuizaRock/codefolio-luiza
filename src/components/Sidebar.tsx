import SidebarIcon from "@/components/SidebarIcon";

export default function Sidebar() {
  return (
    <aside
      className="sticky top-6 h-[100dvh] w-[200px] py-6
                 grid grid-cols-2 gap-x-12 gap-y-8 justify-items-center items-start
                 overflow-y-auto"
    >
      {/* Navegação interna */}
      <SidebarIcon href="/" label="Home" iconSrc="/images/home.png" />
      <SidebarIcon href="/about" label="About" iconSrc="/images/about.png" />
      <SidebarIcon href="/resume" label="Resume" iconSrc="/images/resume.png" />
      <SidebarIcon href="/blog" label="Blog" iconSrc="/images/blog.png" />
      <SidebarIcon href="/edu" label="Edu" iconSrc="/images/edu.png" />

      {/* Email form */}
      <SidebarIcon href="/email" label="Email" iconSrc="/images/email.png" />

      {/* Links externos */}
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

      {/* Spotify */}
      <SidebarIcon href="/spotify" label="Spotify" iconSrc="/images/spotify.png" />
    </aside>
  );
}
