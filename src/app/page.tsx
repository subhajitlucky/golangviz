import { CheatSheets } from "@/components/cheatsheets";
import { FeatureGrid } from "@/components/feature-grid";
import { Hero } from "@/components/hero";
import { KnowledgeSearch } from "@/components/search";
import { ModuleGrid } from "@/components/module-grid";
import { Navigation } from "@/components/navigation";
import { Playground } from "@/components/playground";
import { QuizCards } from "@/components/quiz-cards";
import { Roadmap } from "@/components/roadmap";
import { Section } from "@/components/section";
import { ChannelVisualizer } from "@/components/visualizers/channel-visualizer";
import { SchedulerVisualizer } from "@/components/visualizers/scheduler-visualizer";
import { SliceLab } from "@/components/visualizers/slice-lab";

const coreFeatures = [
  {
    title: "Interactive memory maps",
    description:
      "See stack vs heap, pointers, escape analysis hints, and interface fat pointers updated as code executes.",
  },
  {
    title: "Stepper like Python Tutor",
    description:
      "Advance line by line, watch variables mutate, visualize function frames, and highlight goroutine creation.",
  },
  {
    title: "Concurrency visualized",
    description:
      "G/M/P scheduler diagrams, channel queues, mutex state, race-condition explainer overlays.",
  },
  {
    title: "Data structure deep-dives",
    description:
      "Arrays, slices, maps, and structs rendered with alignment, padding, capacity growth, and bucket hashing.",
  },
  {
    title: "Compiler & build pipeline",
    description:
      "Show parse → type-check → SSA → escape analysis → codegen → link steps, plus binary layout overview.",
  },
  {
    title: "Story-first curriculum",
    description:
      "Bite-sized chapters with diagrams, quizzes, cheatsheets, and project-based examples that reinforce concepts.",
  },
];

const modules = [
  {
    title: "Foundation",
    level: "foundation" as const,
    items: [
      "What is Go, install, toolchain tour",
      "First program, values, control flow, functions",
      "Packages, imports, errors 101",
    ],
  },
  {
    title: "Memory & Types",
    level: "memory" as const,
    items: [
      "Stack vs heap, escape analysis",
      "Pointers, struct layout, alignment, padding",
      "Arrays, slices (growth, sharing), maps (buckets/overflow)",
      "Interfaces: itab + data representation",
    ],
  },
  {
    title: "Concurrency",
    level: "concurrency" as const,
    items: [
      "Goroutines and M:N scheduler",
      "Channels (buffered/unbuffered), select, blocking vs non-blocking",
      "Mutex/RWMutex, WaitGroup, Context cancellation",
      "Scheduler deep dive: run queues, work stealing",
    ],
  },
  {
    title: "Advanced",
    level: "advanced" as const,
    items: [
      "Error handling patterns, custom errors",
      "Generics ergonomics and type inference",
      "Testing, benchmarking, profiling (pprof), tracing",
      "Modules, builds, cross-compilation, GC lifecycle",
    ],
  },
];

const roadmapItems = [
  {
    title: "MVP Visualizers",
    description:
      "Memory map + channel queue + goroutine timeline, static demos with curated examples.",
    time: "Now → 2 weeks",
  },
  {
    title: "WASM Playground",
    description:
      "Client-side Go execution (tinygo/wasm) with stepper hooks for memory snapshots.",
    time: "Weeks 3-4",
  },
  {
    title: "Curriculum v1",
    description:
      "Full foundations + memory + concurrency modules with quizzes and cheatsheets.",
    time: "Month 2",
  },
  {
    title: "Community & AI Assist",
    description:
      "User accounts (optional), save sessions, AI hints, auto-generated diagrams from snippets.",
    time: "Month 3+",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navigation />
      <main className="space-y-4 pb-20">
        <Hero />

        <Section
          id="features"
          kicker="Why visual-first Go"
          title="Everything you wish Go docs showed — rendered live."
          description="Blend Go by Example, VisualGo, Python Tutor, and Roadmap-style sequencing into one focused, beginner-friendly experience."
        >
          <FeatureGrid features={coreFeatures} />
        </Section>

        <Section
          id="visualizers"
          kicker="Interactive demos"
          title="Memory, channels, scheduler — visual debuggers"
          description="Step through code and watch stack frames, heap objects, channel buffers, and goroutines evolve frame by frame."
        >
          <div className="space-y-6">
            <Playground />
            <div className="grid gap-6 lg:grid-cols-2">
              <ChannelVisualizer />
              <SchedulerVisualizer />
            </div>
            <SliceLab />
          </div>
        </Section>

        <Section
          id="curriculum"
          kicker="Curriculum"
          title="Chapters from first program to GC internals"
          description="Each chapter pairs diagrams, animations, quizzes, and runnable code playgrounds."
        >
          <ModuleGrid modules={modules} />
        </Section>

        <Section
          id="search"
          kicker="Search"
          title="Find topics, labs, and chapters fast"
          description="Client-side search now; later, hook to static index or edge function."
        >
          <KnowledgeSearch />
        </Section>

        <Section
          id="quizzes"
          kicker="Practice"
          title="Quizzes and quick checks"
          description="Reinforce learning with instant feedback."
        >
          <QuizCards />
        </Section>

        <Section
          id="cheatsheets"
          kicker="Downloads"
          title="Cheat sheets & offline notes"
          description="Printable PDFs for fast recall; sample PDF included."
        >
          <CheatSheets />
        </Section>

        <Section
          id="roadmap"
          kicker="Open roadmap"
          title="Transparent, open-source plan"
          description="Ship fast, keep it free, and let the community extend visualizers and lessons."
        >
          <Roadmap items={roadmapItems} />
        </Section>

        <Section
          id="playground"
          kicker="Mini playground"
          title="Write, run, visualize — all in the browser"
          description="Future: WASM-backed Go runner with hooks to emit memory snapshots, channel events, and scheduler traces."
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
            <ul className="space-y-2">
              <li>• Client-only by default; optional edge functions for search.</li>
              <li>• WASM sandbox for code execution with capped resources.</li>
              <li>• Visual hooks: stack/heap snapshots, channel enqueue/dequeue, goroutine state transitions.</li>
              <li>• Export sessions as shareable links; open-source under MIT.</li>
            </ul>
          </div>
        </Section>
      </main>
    </div>
  );
}
