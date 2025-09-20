export const metadata = { title: "Resume — Luiza" };

export default function ResumePage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Currículo</h1>
      <div className="h-[70vh]">
        <iframe
          src="/resume.pdf#view=FitH"
          title="Currículo"
          className="w-full h-full rounded-xl border"
        />
      </div>
      <p className="text-sm text-zinc-500">
        Se não aparecer, adicione seu arquivo em <code>public/resume.pdf</code>.
      </p>
    </section>
  );
}
