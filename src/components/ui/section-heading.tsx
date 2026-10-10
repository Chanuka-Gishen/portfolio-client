export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[.2em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 leading-7 text-muted">{description}</p>
      )}
    </div>
  );
}
