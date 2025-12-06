type RoadmapItem = {
  title: string;
  description: string;
  time: string;
};

export function Roadmap({ items }: { items: RoadmapItem[] }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-400/40 via-white/10 to-transparent" />
      <div className="space-y-8">
        {items.map((item, idx) => (
          <div key={item.title} className="relative pl-12">
            <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-slate-200">
              {idx + 1}
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-blue-500/10">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <span className="text-xs uppercase tracking-wide text-blue-200">
                  {item.time}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

