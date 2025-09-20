"use client";

export default function HomePage() {
  return (
    <section className="card space-y-6">
      {/* Intro */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Oi! Eu sou a Luiza 👋</h1>
        <p className="text-zinc-700 leading-relaxed">
          Uma desenvolvedora que gosta de transformar ideias em experiências digitais
          que unam criatividade e funcionalidade. Adoro resolver problemas,
          experimentar novas ferramentas e estar sempre em evolução.
        </p>
      </div>

      {/* Jornada */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Minha jornada</h2>
        <p className="text-zinc-700 leading-relaxed">
          Tudo começou com a curiosidade de entender como os sites funcionavam, e isso
          acabou virando uma paixão por criar experiências digitais e aprender cada vez
          mais sobre o universo da tecnologia.
        </p>
        
      </div>

      {/* Além do código */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Além do código</h2>
        <ul className="list-disc pl-6 space-y-1 text-zinc-700">
          <li>📚 Leitura — fantasia, romances e clássicos da literatura</li>
          <li>🎶 Música e podcasts — do rock ao forró, com carinho especial pelo Nerdcast</li>
          <li>📺 Séries e filmes — especialmente fantasia e drama</li>
          <li>🎮 Games — como Diablo e No Man’s Sky</li>
          <li>🐱 Mãe de pet — Dolly, Salém e Enola ♥</li>
          <li>🍳 Cozinhar e testar novas receitas</li>
        </ul>
      </div>
    </section>
  );
}
