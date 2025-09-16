type Props = { title?: string; children: React.ReactNode; className?: string };

export default function Window({ title, children, className }: Props) {
  return (
    <section className={`window p-6 ${className ?? ""}`}>
      {title ? <h2 className="window-title">{title}</h2> : null}
      {children}
    </section>
  );
}
