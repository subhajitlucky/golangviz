import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Section } from "@/components/section";
import Link from "next/link";

export default function BasicTypes() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navigation />
      <main className="space-y-6 pb-16">
        <Section
          id="numbers"
          kicker="Concept"
          title="Numbers"
          description="Integers and floating-point types."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="surface rounded-2xl p-5 shadow-md shadow-blue-500/10 space-y-3">
              <h3 className="text-lg font-semibold">Integers</h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
                <li><strong>int / uint:</strong> Platform dependent (32 or 64 bits).</li>
                <li><strong>int8, int16, int32, int64:</strong> Explicit sizes.</li>
                <li><strong>uint8, uint16, uint32, uint64:</strong> Unsigned versions.</li>
              </ul>
            </div>

            <div className="surface rounded-2xl p-5 shadow-md shadow-emerald-500/10 space-y-3">
              <h3 className="text-lg font-semibold">Floating Point</h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
                <li><strong>float32:</strong> IEEE-754 32-bit floating-point numbers.</li>
                <li><strong>float64:</strong> IEEE-754 64-bit floating-point numbers (default).</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section
          id="text"
          kicker="Types"
          title="Strings & Characters"
          description="Working with text in Go."
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-[var(--panel-border)] bg-[var(--panel)] p-4">
              <h4 className="font-semibold mb-2">string</h4>
              <p className="text-sm text-[var(--muted)]">
                Immutable sequence of bytes. Usually holds UTF-8 encoded text.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--panel-border)] bg-[var(--panel)] p-4">
              <h4 className="font-semibold mb-2">byte</h4>
              <p className="text-sm text-[var(--muted)]">
                Alias for <code>uint8</code>. Used for raw data.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--panel-border)] bg-[var(--panel)] p-4">
              <h4 className="font-semibold mb-2">rune</h4>
              <p className="text-sm text-[var(--muted)]">
                Alias for <code>int32</code>. Represents a Unicode code point.
              </p>
            </div>
          </div>
        </Section>

        <Section
          id="others"
          kicker="Types"
          title="Booleans & Complex"
          description="Logical values and mathematical complex numbers."
        >
          <div className="surface rounded-2xl p-5 shadow-md shadow-orange-500/10 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-semibold">bool</h4>
                <p className="text-sm text-[var(--muted)]">Either <code>true</code> or <code>false</code>.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">complex64 / complex128</h4>
                <p className="text-sm text-[var(--muted)]">Represent complex numbers with float32/float64 real and imaginary parts.</p>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="next"
          kicker="Next Steps"
          title="Constants"
          description="Fixed values that never change."
        >
          <div className="flex justify-center">
            <Link
              href="/concepts/constants"
              className="rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-semibold text-white !text-white shadow-md transition hover:-translate-y-0.5"
            >
              Next: Constants
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
