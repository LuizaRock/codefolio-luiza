// src/components/EmailForm.tsx
"use client";

import { useState } from "react";

export default function EmailForm() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // honeypot anti-spam
  const [company, setCompany] = useState("");

  const TO = "seuemail@exemplo.com"; // <-- troque pro teu e-mail

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (company) return; // bot fake? ignora

    if (!name || !from || !subject || !message) {
      alert("Preenche tudo, vai. 😊");
      return;
    }

    const body =
      `Nome: ${name}\n` +
      `E-mail: ${from}\n\n` +
      message;

    const mailto = `mailto:${encodeURIComponent(TO)}`
      + `?subject=${encodeURIComponent(subject)}`
      + `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* honeypot */}
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="hidden"
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-2">
        <label className="text-sm text-slate-700" htmlFor="name">Nome</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600/30"
          placeholder="Seu nome"
          required
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm text-slate-700" htmlFor="from">Seu e-mail</label>
        <input
          id="from"
          type="email"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600/30"
          placeholder="voce@exemplo.com"
          required
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm text-slate-700" htmlFor="subject">Assunto</label>
        <input
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600/30"
          placeholder="Sobre qual vaga/projeto?"
          required
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm text-slate-700" htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600/30"
          placeholder="Manda a braba aqui."
          required
        />
      </div>

      <button
        type="submit"
        className="rounded-xl px-4 py-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow"
      >
        Enviar
      </button>

      <p className="text-xs text-slate-500">
        Dica: depois a gente troca para envio por API (Nodemailer/Resend) para não depender do cliente.
      </p>
    </form>
  );
}
