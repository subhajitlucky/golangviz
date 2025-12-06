type SectionProps = {
  id?: string;
  kicker?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function Section({
  id,
  kicker,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="mb-8 flex flex-col gap-2">
        {kicker ? (
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
            {kicker}
          </span>
        ) : null}
        <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-3xl text-base text-slate-300">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

