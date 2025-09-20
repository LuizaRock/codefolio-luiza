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
    author: "Luiza Biruleibe",
    content: `
      <h2>💻 Server vs Client</h2>
      <ul>
        <li><strong>Server</strong>: renderiza no servidor, sem JS no cliente.</li>
        <li><strong>Client</strong>: interação com estado/eventos (<code>useState</code>).</li>
      </ul>
      <p>Rota dinâmica vive em <code>app/posts/[slug]/page.tsx</code>.</p>
    `,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
