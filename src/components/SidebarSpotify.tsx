"use client";

import SidebarIcon from "@/components/SidebarIcon";

export default function SidebarSpotify() {
  return (
    <SidebarIcon
      label="Spotify"
      iconSrc="/images/spotify.png"
      onClick={() => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("toggle-player"));
        }
      }}
    />
  );
}
