export const metadata = {
  title: "Educação — CodeFolio",
  description: "Formação acadêmica e certificações de Luiza.",
};

export default function EduPage() {
  return (
    <section className="prose prose-zinc mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Educação</h1>

      <h2 className="text-2xl font-semibold mt-6">Graduação</h2>
      <p>
        <strong>Análise e Desenvolvimento de Sistemas (ADS)</strong> — 3º período em andamento.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Certificações</h2>
      <ul className="list-disc pl-5">
        <li>
          <strong>AWS Certified Cloud Practitioner</strong> — credencial oficial da Amazon Web Services
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Badges & Treinamentos</h2>
      <ul className="list-disc pl-5">
        <li>
          <strong>AWS AI Practitioner</strong> — treinamento introdutório da Amazon Web Services
        </li>
        <li>
          <strong>AWS Educate:</strong> Getting Started with Compute — Training Badge
        </li>
        <li>
          <strong>Amazon Web Services Training and Certification:</strong> cursos introdutórios e laboratórios práticos
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Destaques</h2>
      <p>
        Participação em programas de treinamento e certificação da AWS, com foco em fundamentos de
        cloud, inteligência artificial e práticas de desenvolvimento. Atualmente conciliando estudos
        formais em ADS com aprendizado contínuo em tecnologias web e cloud.
      </p>
    </section>
  );
}
