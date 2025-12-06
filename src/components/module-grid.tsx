type Module = {
  title: string;
  level: "foundation" | "memory" | "concurrency" | "advanced";
  items: string[];
};

const badgeColor: Record<Module["level"], string> = {
  foundation: "bg-emerald-400/15 text-emerald-200 border-emerald-400/30",
  memory: "bg-blue-400/10 text-blue-100 border-blue-400/30",
  concurrency: "bg-amber-400/10 text-amber-100 border-amber-400/30",
  advanced: "bg-purple-400/10 text-purple-100 border-purple-400/30",
};

export function ModuleGrid({ modules }: { modules: Module[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {modules.map((module) => (
        <div
          key={module.title}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-blue-500/10"
        >
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">{module.title}</h3>
            <span
              className={`rounded-full border px-3 py-1 text-xs font-semibold ${badgeColor[module.level]}`}
            >
              {module.level}
            </span>
          </div>
          <ul className="space-y-2 text-sm text-slate-200">
            {module.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2"
              >
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/80" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

