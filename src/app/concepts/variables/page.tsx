import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Section } from "@/components/section";
import Link from "next/link";

export default function Variables() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navigation />
      <main className="space-y-6 pb-16">
        <Section
          id="declaration"
          kicker="Concept"
          title="Declaring Variables"
          description="How to store and label data in Go."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="surface rounded-2xl p-5 shadow-md shadow-blue-500/10 space-y-3">
              <h3 className="text-lg font-semibold">The <code>var</code> Keyword</h3>
              <p className="text-sm text-[var(--muted)]">
                Used to declare one or more variables. If a type is provided, the variable is initialized to its zero value.
              </p>
              <pre className="rounded bg-[var(--panel)] p-2 font-mono text-xs text-[var(--foreground)]">
{`var message string = "Hello"
var a, b int = 1, 2
var c = true // Type inferred`}
              </pre>
            </div>

            <div className="surface rounded-2xl p-5 shadow-md shadow-emerald-500/10 space-y-3">
              <h3 className="text-lg font-semibold">Short Declaration <code>:=</code></h3>
              <p className="text-sm text-[var(--muted)]">
                Inside functions, you can use the <code>:=</code> operator to declare and initialize a variable in one go without specifying the type.
              </p>
              <pre className="rounded bg-[var(--panel)] p-2 font-mono text-xs text-[var(--foreground)]">
{`func main() {
    count := 10 // inferred as int
    name := "Go" // inferred as string
}`}
              </pre>
            </div>
          </div>
        </Section>

        <Section
          id="zero-values"
          kicker="Initialization"
          title="Zero Values"
          description="Go ensures every variable has a predictable starting state."
        >
          <div className="surface rounded-2xl p-5 shadow-md shadow-orange-500/10">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="text-center p-3 rounded-xl border border-[var(--panel-border)] bg-[var(--panel)]">
                <div className="font-mono text-[var(--accent)] font-bold">0</div>
                <div className="text-xs text-[var(--muted)]">Numeric types</div>
              </div>
              <div className="text-center p-3 rounded-xl border border-[var(--panel-border)] bg-[var(--panel)]">
                <div className="font-mono text-[var(--accent)] font-bold">false</div>
                <div className="text-xs text-[var(--muted)]">Booleans</div>
              </div>
              <div className="text-center p-3 rounded-xl border border-[var(--panel-border)] bg-[var(--panel)]">
                <div className="font-mono text-[var(--accent)] font-bold">""</div>
                <div className="text-xs text-[var(--muted)]">Strings</div>
              </div>
              <div className="text-center p-3 rounded-xl border border-[var(--panel-border)] bg-[var(--panel)]">
                <div className="font-mono text-[var(--accent)] font-bold">nil</div>
                <div className="text-xs text-[var(--muted)]">Pointers/Slices/etc</div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="rules"
          kicker="Rules"
          title="Variable Constraints"
          description="Things to keep in mind."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--panel-border)] bg-[var(--panel)] p-4 text-sm text-[var(--muted)]">
              <div className="font-semibold text-[var(--foreground)] mb-1">Unused Variables</div>
              <p>Go does not allow unused local variables. If you declare a variable inside a function, you <strong>must</strong> use it, or the code won't compile.</p>
            </div>
            <div className="rounded-2xl border border-[var(--panel-border)] bg-[var(--panel)] p-4 text-sm text-[var(--muted)]">
              <div className="font-semibold text-[var(--foreground)] mb-1">Scope</div>
              <p>Variables are block-scoped. A variable declared inside a function is not accessible outside of it.</p>
            </div>
          </div>
        </Section>

        <Section
          id="next"
          kicker="Next Steps"
          title="Basic Types"
          description="What kinds of data can we store?"
        >
          <div className="flex justify-center">
            <Link
              href="/concepts/basic-types"
              className="rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-semibold text-white !text-white shadow-md transition hover:-translate-y-0.5"
            >
              Next: Basic Types
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
