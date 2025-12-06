type Feature = {
  title: string;
  description: string;
  badge?: string;
};

type FeatureGridProps = {
  features: Feature[];
};

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-blue-500/10 transition hover:-translate-y-1 hover:border-white/20"
        >
          <div className="mb-3 flex items-center gap-2 text-sm text-blue-200">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            {feature.badge ?? "Interactive"}
          </div>
          <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
          <p className="mt-2 text-sm text-slate-300">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

