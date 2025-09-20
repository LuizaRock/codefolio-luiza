// src/components/PlaylistPlayer.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useDraggable } from "@/hooks/useDraggable";

type Track = { title: string; artist?: string; src: string };

const PLAYLIST: Track[] = [
  { title: "Snuff", artist: "Slipknot", src: "/music/Slipknot-Snuff.mp3" },
  { title: "Through Glass", artist: "Stone Sour", src: "/music/StoneSour-Through-Glass.mp3" },
  { title: "The Sound of Silence", artist: "Disturbed", src: "/music/Disturbed-The-Sound-of-Silence.mp3" },
];

// azul principal (tailwind blue-600). Se quiser trocar, mude esta constante.
const BRAND = "#2563eb";

export default function PlaylistPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [visible, setVisible] = useState(false);
  const [openList, setOpenList] = useState(true);

  const { nodeRef, style, handleProps } = useDraggable({
    storageKey: "player-pos",
    initial: {
      x: typeof window !== "undefined" ? window.innerWidth - 380 : 20,
      y: typeof window !== "undefined" ? window.innerHeight - 240 : 20,
    },
    boundsPadding: 8,
  });

  const track = PLAYLIST[index];

  useEffect(() => {
    const onToggle = () => setVisible((v) => !v);
    window.addEventListener("toggle-player", onToggle as EventListener);
    return () => window.removeEventListener("toggle-player", onToggle as EventListener);
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };
  const next = () => {
    setIndex((i) => (i + 1) % PLAYLIST.length);
    setTimeout(() => audioRef.current?.play(), 0);
    setPlaying(true);
  };
  const prev = () => {
    setIndex((i) => (i - 1 + PLAYLIST.length) % PLAYLIST.length);
    setTimeout(() => audioRef.current?.play(), 0);
    setPlaying(true);
  };
  const onTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration || 0);
  };
  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const pct = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    audioRef.current.currentTime = pct * (audioRef.current.duration || 0);
  };
  const fmt = (t: number) => {
    if (!isFinite(t)) return "00:00";
    const m = Math.floor(t / 60), s = Math.floor(t % 60);
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  if (!visible) {
    return (
      <audio
        ref={audioRef}
        src={track.src}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onTimeUpdate}
        onEnded={next}
        preload="metadata"
      />
    );
  }

  return (
    <div
      ref={nodeRef}
      className="z-50 w-[360px] rounded-2xl shadow-xl overflow-hidden select-none border border-slate-200 bg-white text-slate-900"
      style={style}
    >
      {/* HEADER arrastável (claro) */}
      <div
        {...handleProps}
        className="flex items-center justify-between px-4 py-3 cursor-grab active:cursor-grabbing border-b border-slate-200 bg-slate-50/80 backdrop-blur"
      >
        <div className="font-semibold">Now Playing</div>
        <div className="flex items-center gap-2">
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => setOpenList((o) => !o)}
            className="text-xs px-2 py-1 rounded border border-slate-300 hover:bg-slate-100"
          >
            {openList ? "Esconder lista" : "Mostrar lista"}
          </button>
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => setVisible(false)}
            className="text-xs px-2 py-1 rounded border border-slate-300 hover:bg-slate-100"
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Info faixa */}
      <div className="px-4 pt-4">
        <div className="truncate text-lg font-semibold">{track.title}</div>
        <div className="truncate text-sm text-slate-500">{track.artist || "—"}</div>

        {/* barra de progresso (clara + azul) */}
        <div className="mt-3">
          <div className="flex items-center justify-between text-[11px] text-slate-500">
            <span>{fmt(currentTime)}</span>
            <span>{fmt(duration)}</span>
          </div>
          <div
            className="mt-1 h-2 rounded bg-slate-200 cursor-pointer relative"
            onClick={seek}
            aria-label="Barra de progresso"
          >
            <div
              className="absolute left-0 top-0 h-2 rounded"
              style={{
                width: `${(currentTime / (duration || 1)) * 100}%`,
                backgroundColor: BRAND,
              }}
            />
          </div>
        </div>

        {/* Controles */}
        <div className="mt-3 mb-2 flex items-center gap-2">
          <button
            onClick={prev}
            className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 border border-slate-300"
          >
            ⏮
          </button>
          <button
            onClick={togglePlay}
            className="px-4 py-2 rounded font-semibold text-white"
            style={{ backgroundColor: BRAND }}
          >
            {playing ? "⏸ Pause" : "▶️ Play"}
          </button>
          <button
            onClick={next}
            className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 border border-slate-300"
          >
            ⏭
          </button>

          <div className="ml-auto flex items-center gap-2 text-slate-700">
            <span className="text-sm">🔊</span>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-24 accent-blue-600"
            />
          </div>
        </div>
      </div>

      {/* Lista */}
      {openList && (
        <div className="max-h-[38vh] overflow-auto pt-1 pb-3">
          <ul className="px-2">
            {PLAYLIST.map((t, i) => (
              <li key={t.src}>
                <button
                  onClick={() => {
                    setIndex(i);
                    setTimeout(() => audioRef.current?.play(), 0);
                    setPlaying(true);
                  }}
                  className={`w-full text-left rounded px-3 py-2 hover:bg-slate-100 ${
                    i === index ? "bg-slate-100" : ""
                  }`}
                >
                  <div className="truncate font-medium">{t.title}</div>
                  <div className="truncate text-xs text-slate-500">{t.artist || "—"}</div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Áudio */}
      <audio
        ref={audioRef}
        src={track.src}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onTimeUpdate}
        onEnded={next}
        preload="metadata"
      />
    </div>
  );
}
