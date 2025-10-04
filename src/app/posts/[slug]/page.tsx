// src/app/posts/[slug]/page.tsx
import type { Metadata } from "next";
import PostClient from "@/components/PostClient";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

// permite slugs que NÃO estão em generateStaticParams
export const dynamicParams = true;

type Params = { slug: string };

// só os seeds serão pré-gerados (ok)
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

// metadados: se não for seed, devolve algo genérico
export async function generateMetadata(
  { params }: { params: Params }
): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Post — Luiza Rocha",
      description: "Conteúdo do post.",
    };
  }

  const url = `https://seu-dominio.vercel.app/posts/${post.slug}`;
  const title = `${post.title} — Luiza Rocha`;
  const description = post.excerpt ?? post.title;
  const author = post.author;

  return {
    title,
    description,
    authors: [{ name: author }],
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description,
      publishedTime: post.date,
      authors: [author],
    },
    twitter: { card: "summary_large_image", title: post.title, description },
  };
}

export default async function PostPage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug) ?? null;

  // ⚠️ NÃO chama notFound aqui.
  // Seeds vêm do lib; posts do usuário o PostClient carrega do localStorage.
  return <PostClient slug={params.slug} initialPost={post} />;
}
