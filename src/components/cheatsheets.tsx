"use client";

import { useState } from "react";

type Sheet = {
  title: string;
  summary: string;
  link: string;
};

const sheets: Sheet[] = [
  {
    title: "Go Basics",
    summary: "Types, control flow, functions, errors.",
    link: "/notes.pdf",
  },
  {
    title: "Concurrency",
    summary: "Goroutines, channels, select, mutexes, waitgroups.",
    link: "/notes.pdf",
  },
  {
    title: "Runtime & Memory",
    summary: "Stack vs heap, escape analysis, GC lifecycle.",
    link: "/notes.pdf",
  },
  {
    title: "Tooling",
    summary: "Modules, testing, benchmarking, profiling.",
    link: "/notes.pdf",
  },
];

export function CheatSheets() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyLink = (link: string) => {
    navigator.clipboard?.writeText(window.location.origin + link).catch(() => {
      /* ignore clipboard errors */
    });
    setCopied(link);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-emerald-500/10">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">
            Cheat sheets & Downloads
          </p>
          <h3 className="text-lg font-semibold text-white">Grab-and-go refs</h3>
          <p className="text-sm text-slate-300">
            Printable PDFs for quick review (placeholder PDF included).
          </p>
        </div>
        <a
          href="/notes.pdf"
          download
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow"
        >
          Download sample PDF
        </a>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {sheets.map((sheet) => (
          <div
            key={sheet.title}
            className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-slate-200"
          >
            <div>
              <div className="text-white">{sheet.title}</div>
              <p className="text-slate-400">{sheet.summary}</p>
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <a
                href={sheet.link}
                download
                className="rounded-full border border-white/15 px-3 py-2 font-semibold text-white transition hover:border-white/30"
              >
                Download
              </a>
              <button
                onClick={() => copyLink(sheet.link)}
                className="rounded-full border border-white/10 px-3 py-2 font-semibold text-white transition hover:border-white/30"
              >
                {copied === sheet.link ? "Copied" : "Copy link"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

