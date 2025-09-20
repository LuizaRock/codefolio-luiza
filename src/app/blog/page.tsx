import NewPostForm from "@/components/NewPostForm";
import ExtraPosts from "@/components/ExtraPosts";

export default function BlogPage() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="text-zinc-700">Estudos, reflexões e projetos em andamento.</p>
      </div>

      <NewPostForm />

      {/* Todos os posts (fixos + novos), já com botão apagar */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ExtraPosts />
      </div>
    </section>
  );
}
