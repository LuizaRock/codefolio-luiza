// src/lib/posts.ts
import { Post } from "@/types/post";

export const posts: Post[] = [
  {
    slug: "primeiro-post",
    title: "Meu primeiro post",
    date: "2025-09-01",
    author: "Luiza",
    content: `
      <p>🚀 Começando simples: este blog é meu espaço de prática na transição para TI.</p>
      <p>Vou falar de estudos, perrengues e pequenas vitórias.</p>
    `,
  },
  {
    slug: "estudando-next-app-router",
    title: "Estudando Next.js App Router",
    date: "2025-09-10",
    author: "Luiza Rocha",
    content: `
      <h2>💻 Server vs Client</h2>
      <ul>
        <li><strong>Server</strong>: renderiza no servidor, sem JS no cliente.</li>
        <li><strong>Client</strong>: interação com estado/eventos (<code>useState</code>).</li>
      </ul>
      <p>Rota dinâmica vive em <code>app/posts/[slug]/page.tsx</code>.</p>
    `,
  },
  {
    slug: "crud-no-codefolio",
    title: "Implementando CRUD no CodeFolio",
    date: "2025-09-15",
    author: "Luiza Rocha",
    content: `
      <p>🔥 Um dos primeiros upgrades que fiz no meu portfólio foi implementar um CRUD simples.</p>
      <p>Deu trabalho, porque precisei pensar em como salvar, editar e apagar posts direto no browser usando <code>localStorage</code>.</p>
      <p>No fim, valeu demais: entendi melhor como funciona estado, persistência e como pensar um fluxo de dados mais organizado.</p>
    `,
  },
  {
    slug: "mentoria-linkedin-mauricio-sena",
    title: "Mentoria valiosa com Mauricio Sena sobre LinkedIn",
    date: "2025-09-20",
    author: "Luiza Rocha",
    content: `
      <p>💡 Tive uma mentoria muito boa com o Mauricio Sena dentro do Programa Desenvolve.</p>
      <p>Falamos sobre como enriquecer meu LinkedIn. Não apenas listar cursos, mas contar minha história de transição, mostrar projetos e usar storytelling.</p>
      <p>Saí com a sensação de que o LinkedIn pode ser mais do que currículo. Pode ser vitrine e diário de bordo.</p>
    `,
  },
  {
    slug: "personalizacao-do-bookly",
    title: "Personalizando o Bookly",
    date: "2025-09-25",
    author: "Luiza Rocha",
    content: `
      <p>📚 O Bookly é meu projeto pessoal de catálogo de livros e está ganhando forma.</p>
      <p>Adicionei ícones inspirados em Calvin & Hobbes na sidebar, trabalhei na paleta de cores (teal/cream) e testei fontes novas.</p>
      <p>Esse projeto está me ajudando a entender design e código ao mesmo tempo. O melhor é que junta minha paixão por leitura com programação.</p>
    `,
  },
];


// Util: tira tags do HTML e cria um resumo curto
function getExcerptFromHtml(html: string, maxLen = 160): string {
  const text = html
    .replace(/<[^>]+>/g, " ")   // remove tags
    .replace(/\s+/g, " ")       // normaliza espaços
    .trim();
  return text.length > maxLen ? text.slice(0, maxLen - 1).trimEnd() + "…" : text;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

// 👉 usado na home/blog
export function getAllPosts(): Required<
  Pick<Post, "slug" | "title" | "date" | "author" | "excerpt">
>[] {
  return posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    author: p.author ?? "Luiza Rocha",
    excerpt: p.excerpt ?? getExcerptFromHtml(p.content),
  }));
}
