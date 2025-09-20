"use client";

export default function EmailForm() {
  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Seu nome"
        className="w-full rounded border border-slate-300 px-3 py-2"
      />
      <input
        type="email"
        placeholder="Seu e-mail"
        className="w-full rounded border border-slate-300 px-3 py-2"
      />
      <textarea
        placeholder="Sua mensagem"
        className="w-full rounded border border-slate-300 px-3 py-2"
        rows={4}
      />
      <button
        type="submit"
        className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700"
      >
        Enviar
      </button>
    </form>
  );
}
