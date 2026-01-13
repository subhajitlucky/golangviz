import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Section } from "@/components/section";
import Link from "next/link";

export default function HelloWorld() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navigation />
      <main className="space-y-6 pb-16">
        <Section
          id="hello"
          kicker="Concept"
          title="Hello World"
          description="Your first Go program, line by line."
        >
          <div className="surface rounded-2xl p-5 shadow-md shadow-blue-500/10">
            <pre className="whitespace-pre-wrap font-mono text-sm text-[var(--foreground)]">
{`package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`}
            </pre>
          </div>
        </Section>

        <Section
          id="explanation"
          kicker="Deep Dive"
          title="What's happening?"
          description="Breaking down the components of a minimal Go program."
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-[var(--panel-border)] bg-[var(--panel)] p-4">
              <h4 className="font-semibold mb-2">package main</h4>
              <p className="text-sm text-[var(--muted)]">
                Defines the package name. The <code>main</code> package is special: it tells the compiler that this file should compile as an executable rather than a library.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--panel-border)] bg-[var(--panel)] p-4">
              <h4 className="font-semibold mb-2">import "fmt"</h4>
              <p className="text-sm text-[var(--muted)]">
                Includes the <code>fmt</code> (format) package from the standard library, which contains functions for formatting text, including printing to the console.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--panel-border)] bg-[var(--panel)] p-4">
              <h4 className="font-semibold mb-2">func main()</h4>
              <p className="text-sm text-[var(--muted)]">
                The entry point of the program. Execution starts here. It takes no arguments and returns nothing.
              </p>
            </div>
          </div>
        </Section>

        <Section
          id="running"
          kicker="Execution"
          title="Running the program"
          description="How to compile and execute your code."
        >
          <div className="space-y-4">
            <div className="rounded-xl border border-[var(--panel-border)] bg-[var(--panel)] p-4">
              <div className="font-semibold text-sm mb-2">Option 1: Run directly</div>
              <code className="block font-mono text-sm text-[var(--foreground)]">go run main.go</code>
              <p className="mt-1 text-xs text-[var(--muted)]">Compiles and runs the program in one step without leaving a binary behind.</p>
            </div>
            <div className="rounded-xl border border-[var(--panel-border)] bg-[var(--panel)] p-4">
              <div className="font-semibold text-sm mb-2">Option 2: Build a binary</div>
              <code className="block font-mono text-sm text-[var(--foreground)]">go build main.go</code>
              <p className="mt-1 text-xs text-[var(--muted)]">Creates an executable file (e.g., <code>main</code> or <code>main.exe</code>).</p>
            </div>
          </div>
        </Section>

        <Section
          id="next"
          kicker="Next Steps"
          title="Onwards"
          description="Ready to learn about syntax?"
        >
          <div className="flex justify-center">
            <Link
              href="/concepts/basic-syntax"
              className="rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-semibold text-white !text-white shadow-md transition hover:-translate-y-0.5"
            >
              Next: Basic Syntax
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
