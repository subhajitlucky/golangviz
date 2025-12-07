import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/mdx/callout";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    ...components,
    h2: (props) => (
      <h2
        className="mt-8 text-2xl font-semibold text-[var(--foreground)] dark:text-white"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="mt-6 text-xl font-semibold text-[var(--foreground)] dark:text-white"
        {...props}
      />
    ),
    p: (props) => (
      <p
        className="mt-3 leading-relaxed text-[var(--foreground)] dark:text-slate-200"
        {...props}
      />
    ),
    ul: (props) => (
      <ul
        className="mt-3 list-disc space-y-2 pl-5 text-[var(--foreground)] dark:text-slate-200"
        {...props}
      />
    ),
    li: (props) => <li className="leading-relaxed" {...props} />,
    code: (props) => (
      <code
        className="rounded border border-[var(--panel-border)] bg-[var(--panel)] px-1.5 py-0.5 font-mono text-[13px] text-[var(--foreground)] dark:border-white/10 dark:bg-black/50 dark:text-blue-100"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="mt-4 overflow-x-auto rounded-xl border border-[var(--panel-border)] bg-[var(--panel)] p-4 text-sm text-[var(--foreground)] dark:border-white/10 dark:bg-black/70 dark:text-slate-100"
        {...props}
      />
    ),
    a: (props) => (
      <a
        className="text-[var(--accent)] underline decoration-blue-400/50 underline-offset-2 hover:text-blue-700 dark:text-blue-200 dark:hover:text-white"
        {...props}
      />
    ),
  };
}

