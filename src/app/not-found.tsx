// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-soft-gradient">
      <h1 className="text-6xl font-bold text-zinc-800 drop-shadow">404</h1>
      <h2 className="text-2xl font-semibold mt-2">Página não encontrada</h2>
      <p className="text-zinc-600 mt-2">
        O conteúdo que você tentou abrir não existe ou foi movido.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 rounded-2xl bg-pink-200 text-zinc-800 font-medium shadow-lg hover:bg-pink-300 transition"
      >
        Voltar para Home
      </Link>
    </div>
  );
}
