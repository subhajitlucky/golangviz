import { FeatureGrid } from "@/components/feature-grid";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Section } from "@/components/section";

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

export default function Home() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
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
          id="start"
          kicker="Start here"
          title="Open the playground or browse concepts"
          description="Use the playground to see memory, channels, and scheduler visuals. Browse Concepts for the full Go map."
        >
          <div className="flex flex-wrap gap-3">
            <a
              href="/playground"
              className="rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5"
            >
              Open playground
            </a>
            <a
              href="/path"
              className="rounded-full border border-[color:var(--panel-border)] bg-[color:var(--panel)] px-5 py-3 text-sm font-semibold text-[color:var(--foreground)] transition hover:border-[color:var(--accent)]"
            >
              View concepts
            </a>
          </div>
        </Section>
      </main>
    </div>
  );
}
