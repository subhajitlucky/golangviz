"use client";

import { useMemo, useState } from "react";

type SliceState = {
  values: number[];
  cap: number;
  generation: number;
};

export function SliceLab() {
  const [state, setState] = useState<SliceState>({
    values: [0, 1, 2],
    cap: 4,
    generation: 1,
  });
  const [nextValue, setNextValue] = useState(3);

  const append = () => {
    setState((prev) => {
      const needsGrow = prev.values.length + 1 > prev.cap;
      const newCap = needsGrow ? Math.max(2 * prev.cap, prev.values.length + 1) : prev.cap;
      const generation = needsGrow ? prev.generation + 1 : prev.generation;
      return {
        values: [...prev.values, nextValue],
        cap: newCap,
        generation,
      };
    });
    setNextValue((n) => n + 1);
  };

  const sliceView = useMemo(() => {
    const padded = [...state.values];
    while (padded.length < state.cap) padded.push(NaN);
    return padded;
  }, [state]);

  const reset = () => {
    setState({ values: [0, 1, 2], cap: 4, generation: 1 });
    setNextValue(3);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-emerald-500/10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">
            Slices
          </p>
          <h3 className="text-lg font-semibold text-white">Slice Growth Lab</h3>
          <p className="text-sm text-slate-300">
            Append elements, watch len/cap, and see when the underlying array
            reallocates (generation changes).
          </p>
        </div>
        <div className="flex gap-2 text-xs">
          <button
            onClick={append}
            className="rounded-full bg-white px-3 py-2 font-semibold text-slate-900 shadow"
          >
            Append {nextValue}
          </button>
          <button
            onClick={reset}
            className="rounded-full border border-white/15 px-3 py-2 font-semibold text-white"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-[1.1fr,0.9fr]">
        <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-slate-100">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Underlying array</span>
            <span className="text-xs text-slate-400">
              len={state.values.length} cap={state.cap}
            </span>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {sliceView.map((v, idx) => (
              <div
                key={idx}
                className={`flex h-14 items-center justify-center rounded-lg border px-3 text-base font-semibold ${
                  Number.isNaN(v)
                    ? "border-dashed border-white/15 text-slate-600"
                    : "border-emerald-400/40 bg-emerald-500/10 text-emerald-100"
                }`}
              >
                {Number.isNaN(v) ? "·" : v}
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-300">
            Generation (pointer identity):{" "}
            <span className="font-mono text-emerald-200">
              ptr-0x{state.generation.toString(16)}
            </span>{" "}
            {state.generation > 1
              ? "(reallocation happened)"
              : "(same backing array)"}
          </p>
        </div>

        <div className="space-y-3 text-sm text-slate-200">
          <InfoRow label="len" value={state.values.length} />
          <InfoRow label="cap" value={state.cap} />
          <InfoRow label="next append" value={nextValue} />
          <div className="rounded-xl border border-white/10 bg-black/40 p-3 text-xs text-slate-300">
            <p className="font-semibold text-white">Notes</p>
            <ul className="mt-2 space-y-1">
              <li>• len grows with each append.</li>
              <li>• cap doubles when len exceeds cap (simplified heuristic).</li>
              <li>• generation increments on reallocation (pointer changes).</li>
              <li>• Sharing slices? If generation changes, old aliases break.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs">
      <span className="text-slate-300">{label}</span>
      <span className="font-mono text-white">{value}</span>
    </div>
  );
}

