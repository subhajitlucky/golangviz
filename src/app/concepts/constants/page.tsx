import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Section } from "@/components/section";
import Link from "next/link";

export default function Constants() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navigation />
      <main className="space-y-6 pb-16">
        <Section
          id="const"
          kicker="Concept"
          title="Declaring Constants"
          description="Values that are fixed at compile time."
        >
          <div className="surface rounded-2xl p-5 shadow-md shadow-blue-500/10 space-y-4">
            <p className="text-sm text-[var(--muted)]">
              Constants are declared like variables, but with the <code>const</code> keyword. They can be character, string, boolean, or numeric values.
            </p>
            <pre className="rounded bg-[var(--panel)] p-2 font-mono text-xs text-[var(--foreground)]">
{`const Pi = 3.14
const Greeting = "Hello"
const IsTrue = true`}
            </pre>
            <p className="text-sm text-[var(--muted)]">
              Constants cannot be declared using the <code>:=</code> syntax.
            </p>
          </div>
        </Section>

        <Section
          id="iota"
          kicker="Special Feature"
          title="The iota Enumerator"
          description="Simplifying sequence definitions."
        >
          <div className="surface rounded-2xl p-5 shadow-md shadow-emerald-500/10 space-y-3">
            <p className="text-sm text-[var(--muted)]">
              The <code>iota</code> keyword is used in <code>const</code> blocks to create a sequence of related values.
            </p>
            <pre className="rounded bg-[var(--panel)] p-2 font-mono text-xs text-[var(--foreground)]">
{`const (
    Red = iota   // 0
    Blue         // 1
    Green        // 2
)`}
            </pre>
            <p className="text-sm text-[var(--muted)]">
              It resets to 0 whenever the <code>const</code> keyword appears in the source code.
            </p>
          </div>
        </Section>

        <Section
          id="typed-untyped"
          kicker="Deep Dive"
          title="Typed vs Untyped Constants"
          description="Go's unique approach to constant precision."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--panel-border)] bg-[var(--panel)] p-4 text-sm text-[var(--muted)]">
              <div className="font-semibold text-[var(--foreground)] mb-1">Untyped Constants</div>
              <p>An untyped constant doesn't have a fixed type yet. It has arbitrary precision and can be used where any compatible type is expected.</p>
            </div>
            <div className="rounded-2xl border border-[var(--panel-border)] bg-[var(--panel)] p-4 text-sm text-[var(--muted)]">
              <div className="font-semibold text-[var(--foreground)] mb-1">Typed Constants</div>
              <p>A typed constant has a specific type and obeys all Go type rules (no implicit conversion).</p>
            </div>
          </div>
        </Section>

        <Section
          id="next"
          kicker="Next Steps"
          title="Level Complete!"
          description="You've finished the fundamentals."
        >
          <div className="flex justify-center">
            <Link
              href="/path"
              className="rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-semibold text-white !text-white shadow-md transition hover:-translate-y-0.5"
            >
              Back to Path
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
