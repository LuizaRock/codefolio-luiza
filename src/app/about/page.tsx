// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <section className="prose prose-zinc max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-zinc-900">Oi, eu sou a Luiza</h1>

      <p className="text-zinc-800">
        Passei boa parte da minha vida no varejo, ouvindo pessoas, resolvendo
        problemas e tentando fazer o dia delas ser um pouco mais leve. Gostava
        disso, mas ao mesmo tempo sentia um vazio: parecia que eu só apagava
        incêndios, nunca criava algo que ficasse. Foi quando percebi que queria
        mudar. Que eu podia levar essa mesma escuta, essa mesma resiliência,
        para outro lugar — a tecnologia. Hoje, programar pra mim é isso: dar forma
        ao que antes era só ideia.
      </p>

      <h2 className="text-2xl font-semibold text-zinc-900 mt-8">Minha jornada</h2>
      <p className="text-zinc-800">
        Atualmente participo do <strong>Programa Desenvolve 2025</strong> (Grupo
        Boticário + Escola Koru), onde estudo Desenvolvimento Full Stack (HTML,
        CSS, JavaScript, React) e tenho mentorias de soft skills como comunicação
        e autoconfiança. Também venho explorando Cloud (AWS), já com a
        certificação <strong>Cloud Practitioner</strong> conquistada.
      </p>

      <h2 className="text-2xl font-semibold text-zinc-900 mt-8">Além do código</h2>
      <ul className="list-disc pl-6 text-zinc-800 space-y-1">
        <li>Leitura: fantasia, romances e clássicos da literatura</li>
        <li>Música e podcasts: do rock ao forró, com carinho especial pelo Nerdcast</li>
        <li>Séries e filmes: especialmente fantasia e drama</li>
        <li>Games: jogadora fiel de Diablo e No Man’s Sky</li>
        <li>Mãe de pet da Dolly, Salém e Enola</li>
        <li>Cozinhar e testar novas receitas</li>
      </ul>
    </section>
  );
}
