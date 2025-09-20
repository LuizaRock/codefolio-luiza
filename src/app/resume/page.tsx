export const metadata = {
  title: "Resume — CodeFolio",
  description: "Currículo de Luiza — experiência, formação e certificação.",
};

export default function ResumePage() {
  return (
    <section className="prose prose-zinc mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Currículo</h1>

      <p className="text-lg">
        Desenvolvedora em transição para TI, com experiência prática em projetos de
        desenvolvimento web (React, Next.js, Node.js) e cloud computing (AWS).
        Tenho o <strong>AWS Certified Cloud Practitioner</strong> e venho
        expandindo para automação serverless (Lambda, DynamoDB, EventBridge).
      </p>

      <h2 className="mt-8 text-2xl font-semibold">Skills</h2>
      <ul className="list-disc pl-5">
        <li><strong>Frontend:</strong> React, Next.js (App Router), TypeScript, Tailwind CSS</li>
        <li><strong>Backend:</strong> Node.js, Express, APIs REST, JWT</li>
        <li><strong>Cloud:</strong> AWS (Lambda, DynamoDB, EventBridge, S3, CloudWatch)</li>
        <li><strong>Ferramentas:</strong> Git/GitHub, CI/CD básico, Docker</li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold">Projetos</h2>
      <ul className="list-disc pl-5">
        <li>
          <strong>CodeFolio</strong> — este portfólio/blog pessoal em Next.js,
          com App Router, posts dinâmicos (/posts/[slug]), botão de like e
          integração com localStorage para criar e apagar posts.
        </li>
        <li>
          <strong>Labs Serverless</strong> — experimentos com AWS Lambda,
          DynamoDB e EventBridge para automação e pipelines assíncronos.
        </li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold">Experiência</h2>
      <p>
        Atuação no varejo e consultoria, desenvolvendo habilidades de
        comunicação, diagnóstico de necessidades e entrega de soluções.
        Essa bagagem fortalece minha transição para TI, trazendo foco em
        experiência do usuário e disciplina de execução.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">Formação</h2>
      <ul className="list-disc pl-5">
        <li>Formação contínua em programação (JavaScript/TypeScript, React, Next.js, Node.js)</li>
        <li>Estudos em cloud computing com AWS (cursos e laboratórios práticos)</li>
        <li>Certificação <strong>AWS Certified Cloud Practitioner</strong></li>
      </ul>
    </section>
  );
}
