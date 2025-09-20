"use client";

import { useState, useRef, useEffect } from "react";

export default function SpotifyPlayer() {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false); // controla visibilidade
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    function onToggle() {
      setVisible((v) => !v);
    }
    window.addEventListener("toggle-player", onToggle);
    return () => window.removeEventListener("toggle-player", onToggle);
  }, []);

  function togglePlay() {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white/80 backdrop-blur rounded-lg shadow-md p-3 flex items-center gap-3 z-50">
      <button
        onClick={togglePlay}
        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {playing ? "⏸ Pausar" : "▶️ Tocar"}
      </button>
      <audio ref={audioRef} src="/music/musica.mp3" loop />
    </div>
  );
}
