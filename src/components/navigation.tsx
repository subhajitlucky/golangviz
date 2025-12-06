"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const links = [
  { href: "#features", label: "Core Features" },
  { href: "#visualizers", label: "Visualizers" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#playground", label: "Playground" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const filteredLinks = useMemo(
    () => links.map((link) => ({ ...link })),
    [],
  );

  return (
    <header className="sticky top-0 z-30 backdrop-blur border-b border-white/5 bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300 shadow-lg shadow-blue-500/20">
            Go
          </span>
          <span>GolangViz</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          {filteredLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow-sm transition hover:translate-y-0.5 hover:shadow-lg"
          >
            View on GitHub
          </a>
        </nav>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-200"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/5 bg-slate-900/90 px-6 pb-4 pt-2 text-sm text-slate-200 md:hidden">
          <div className="flex flex-col gap-3">
            {filteredLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2 transition hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-white text-center text-slate-900 px-3 py-2 font-semibold shadow-sm transition hover:bg-slate-100"
              onClick={() => setOpen(false)}
            >
              View on GitHub
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

