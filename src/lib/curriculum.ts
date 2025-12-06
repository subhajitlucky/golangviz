export type Chapter = {
  slug: string;
  title: string;
  summary: string;
  category: "Foundation" | "Memory" | "Concurrency" | "Advanced";
};

export const chapters: Chapter[] = [
  {
    slug: "foundation",
    title: "Foundation",
    summary: "Toolchain, syntax, first program, control flow, functions, errors.",
    category: "Foundation",
  },
  {
    slug: "memory",
    title: "Memory & Types",
    summary: "Stack vs heap, escape analysis, pointers, structs, slices, maps, interfaces.",
    category: "Memory",
  },
  {
    slug: "concurrency",
    title: "Concurrency",
    summary: "Goroutines, channels, select, sync primitives, scheduler deep dive.",
    category: "Concurrency",
  },
  {
    slug: "advanced",
    title: "Advanced & Tooling",
    summary: "Generics, testing, benchmarking, profiling, modules, cross-compilation, GC.",
    category: "Advanced",
  },
];

