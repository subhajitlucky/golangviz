"use client";

import { useMemo, useState } from "react";

type Topic = {
  title: string;
  category: string;
  tags: string[];
  summary: string;
};

const topics: Topic[] = [
  {
    title: "Stack vs Heap",
    category: "Memory",
    tags: ["escape analysis", "allocations"],
    summary: "Visualize allocations, escapes, and frame lifetimes.",
  },
  {
    title: "Slices deep dive",
    category: "Data",
    tags: ["cap", "append", "sharing"],
    summary: "Growth, reallocation, and aliasing pitfalls.",
  },
  {
    title: "Channels & Select",
    category: "Concurrency",
    tags: ["send", "receive", "blocking"],
    summary: "Buffered vs unbuffered, blocking, and select fairness.",
  },
  {
    title: "Scheduler (G/M/P)",
    category: "Concurrency",
    tags: ["goroutines", "work stealing"],
    summary: "Run queues, Ps, Ms, timers, and syscalls.",
  },
  {
    title: "Interfaces (itab + data)",
    category: "Types",
    tags: ["methods", "fat pointers"],
    summary: "How interface values store type info and data pointers.",
  },
  {
    title: "GC lifecycle",
    category: "Runtime",
    tags: ["mark", "sweep", "assists"],
    summary: "Tri-color mark, assists, pacing, and safepoints.",
  },
];

export function KnowledgeSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return topics;
    return topics.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        t.summary.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-blue-500/10">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-blue-200">
            Search
          </p>
          <h3 className="text-lg font-semibold text-white">
            Search topics, labs, and chapters
          </h3>
          <p className="text-sm text-slate-300">
            Client-side filter now; hook to a static index or edge search later.
          </p>
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search e.g. channels, escape, GC..."
          className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-slate-100 shadow-inner focus:border-blue-400 focus:outline-none md:w-80"
        />
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {results.map((topic) => (
          <div
            key={topic.title}
            className="rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-slate-200"
          >
            <div className="flex items-center justify-between">
              <span className="text-white">{topic.title}</span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase text-slate-300">
                {topic.category}
              </span>
            </div>
            <p className="mt-1 text-slate-400">{topic.summary}</p>
            <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-blue-200">
              {topic.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-blue-400/30 bg-blue-500/10 px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
        {results.length === 0 ? (
          <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-slate-400">
            No results. Try a different keyword (e.g., “gc”, “pointers”).
          </div>
        ) : null}
      </div>
    </div>
  );
}

