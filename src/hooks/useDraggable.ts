"use client";

import { useEffect, useRef } from "react";

type Opts = {
  storageKey?: string;
  initial?: { x: number; y: number };
  boundsPadding?: number;
};

export function useDraggable({
  storageKey = "draggable-pos",
  initial = { x: 20, y: 20 },
  boundsPadding = 8,
}: Opts = {}) {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  // posição atual (em ref, sem re-render)
  const posRef = useRef<{ x: number; y: number }>({ ...initial });
  const draggingRef = useRef(false);
  const startRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const origRef = useRef<{ x: number; y: number }>({ ...initial });

  // carrega posição salva
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const saved = JSON.parse(raw);
        if (typeof saved?.x === "number" && typeof saved?.y === "number") {
          posRef.current = saved;
        }
      }
    } catch {}
    const el = nodeRef.current;
    if (el) {
      el.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
    }
  }, [storageKey]);

  const clamp = (x: number, y: number) => {
    const el = nodeRef.current;
    if (!el) return { x, y };
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const rect = el.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    const minX = boundsPadding;
    const minY = boundsPadding;
    const maxX = vw - w - boundsPadding;
    const maxY = vh - h - boundsPadding;

    return {
      x: Math.min(Math.max(x, minX), Math.max(minX, maxX)),
      y: Math.min(Math.max(y, minY), Math.max(minY, maxY)),
    };
  };

  const apply = (x: number, y: number) => {
    const el = nodeRef.current;
    if (!el) return;
    const c = clamp(x, y);
    el.style.transform = `translate(${c.x}px, ${c.y}px)`;
    posRef.current = c;
  };

  // handlers p/ header
  const onMouseDown = (e: React.MouseEvent) => {
    draggingRef.current = true;
    startRef.current = { x: e.clientX, y: e.clientY };
    origRef.current = { ...posRef.current };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - startRef.current.x;
    const dy = e.clientY - startRef.current.y;
    apply(origRef.current.x + dx, origRef.current.y + dy);
  };

  const onMouseUp = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    try {
      localStorage.setItem(storageKey, JSON.stringify(posRef.current));
    } catch {}
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    if (!t) return;
    draggingRef.current = true;
    startRef.current = { x: t.clientX, y: t.clientY };
    origRef.current = { ...posRef.current };
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("touchcancel", onTouchEnd);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!draggingRef.current) return;
    const t = e.touches[0];
    if (!t) return;
    e.preventDefault(); // evita scroll
    const dx = t.clientX - startRef.current.x;
    const dy = t.clientY - startRef.current.y;
    apply(origRef.current.x + dx, origRef.current.y + dy);
  };

  const onTouchEnd = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    try {
      localStorage.setItem(storageKey, JSON.stringify(posRef.current));
    } catch {}
    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("touchend", onTouchEnd);
    window.removeEventListener("touchcancel", onTouchEnd);
  };

  // manter dentro da viewport ao redimensionar
  useEffect(() => {
    const onResize = () => {
      apply(posRef.current.x, posRef.current.y);
      try {
        localStorage.setItem(storageKey, JSON.stringify(posRef.current));
      } catch {}
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const style: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    transform: `translate(${posRef.current.x}px, ${posRef.current.y}px)`,
    touchAction: "none",
    willChange: "transform",
    userSelect: "none",
  };

  return {
    nodeRef,
    style,
    handleProps: {
      onMouseDown,
      onTouchStart,
      // ajuda a não “roubar” o drag ao clicar rápido
      onDragStart: (e: React.DragEvent) => e.preventDefault(),
    },
  };
}
