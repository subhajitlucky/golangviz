"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/", label: "Home", scope: "home" },
  { href: "/playground", label: "Playground", scope: "content" },
  { href: "/path", label: "Concepts", scope: "content" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const filteredLinks = useMemo(() => links.map((link) => ({ ...link })), []);

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--panel-border)] bg-[color:var(--background)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-base font-semibold tracking-tight text-[color:var(--foreground)]">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[color:var(--panel-border)] bg-[color:var(--panel)] text-[color:var(--foreground)]">
            Go
          </span>
          <span className="text-[color:var(--foreground)]">GolangViz</span>
        </Link>
        <nav className="hidden items-center gap-3 text-sm text-[color:var(--foreground)] md:flex">
          {filteredLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 font-medium text-[color:var(--foreground)]/80 transition hover:text-[color:var(--foreground)] hover:bg-[color:var(--panel)] hover:border hover:border-[color:var(--panel-border)]"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-[color:var(--panel-border)] px-4 py-2 text-sm font-semibold text-[color:var(--foreground)] transition hover:bg-[color:var(--panel)]"
          >
            GitHub
          </a>
        </nav>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden rounded-md border border-[color:var(--panel-border)] bg-[color:var(--panel)] px-3 py-2 text-sm font-semibold text-[color:var(--foreground)]"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <div className="border-t border-[color:var(--panel-border)] bg-[color:var(--background)]/95 px-4 pb-4 pt-2 text-sm text-[color:var(--foreground)] md:hidden">
          <div className="flex flex-col gap-2">
            {filteredLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 transition hover:bg-[color:var(--panel)]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-md border border-[color:var(--panel-border)] px-3 py-2 text-center font-semibold text-[color:var(--foreground)] transition hover:bg-[color:var(--panel)]"
                onClick={() => setOpen(false)}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

