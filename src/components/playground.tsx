"use client";

import { useMemo, useState } from "react";

type MemoryCell = { label: string; value: string; emphasis?: boolean };
type Step = {
  line: string;
  note: string;
  stack: MemoryCell[];
  heap: MemoryCell[];
  channels: MemoryCell[];
  goroutines: MemoryCell[];
};

const sampleSteps: Step[] = [
  {
    line: "x := 10",
    note: "Allocate x on the stack with value 10.",
    stack: [{ label: "x", value: "10", emphasis: true }],
    heap: [],
    channels: [],
    goroutines: [{ label: "main", value: "running", emphasis: true }],
  },
  {
    line: "p := &x",
    note: "Pointer p holds the address of x (still stack-allocated).",
    stack: [
      { label: "x", value: "10" },
      { label: "p", value: "&x", emphasis: true },
    ],
    heap: [],
    channels: [],
    goroutines: [{ label: "main", value: "running" }],
  },
  {
    line: "go worker(p)",
    note: "New goroutine scheduled; p escapes? Not yet, only pointer shared.",
    stack: [
      { label: "x", value: "10" },
      { label: "p", value: "&x" },
    ],
    heap: [],
    channels: [],
    goroutines: [
      { label: "main", value: "running" },
      { label: "g0 worker", value: "runnable", emphasis: true },
    ],
  },
  {
    line: "ch := make(chan int, 2)",
    note: "Buffered channel allocated on heap; capacity 2.",
    stack: [
      { label: "x", value: "10" },
      { label: "p", value: "&x" },
      { label: "ch", value: "chan int (cap 2)", emphasis: true },
    ],
    heap: [{ label: "chan buffer", value: "[_, _]" }],
    channels: [
      { label: "ch", value: "len=0 cap=2 (buffered)", emphasis: true },
    ],
    goroutines: [
      { label: "main", value: "running" },
      { label: "g0 worker", value: "waiting to start" },
    ],
  },
];

export function Playground() {
  const [code, setCode] = useState(
    ["x := 10", "p := &x", "go worker(p)", "ch := make(chan int, 2)"].join(
      "\n",
    ),
  );
  const [stepIndex, setStepIndex] = useState(0);

  const current = useMemo(() => sampleSteps[stepIndex], [stepIndex]);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-blue-500/10">
      <div className="flex flex-col gap-4 md:flex-row md:items-start">
        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between text-sm text-slate-200">
            <span className="font-semibold">Mini Playground (static demo)</span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
              Step {stepIndex + 1} / {sampleSteps.length}
            </span>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="h-40 w-full rounded-xl border border-white/10 bg-black/40 p-3 font-mono text-sm text-slate-100 shadow-inner focus:border-blue-400 focus:outline-none"
          />
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Live execution & memory view will run in-browser (WASM) in the full
            build. This static demo shows the UX.
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/30 disabled:cursor-not-allowed disabled:border-white/5 disabled:text-slate-500"
              disabled={stepIndex === 0}
            >
              Prev
            </button>
            <button
              onClick={() =>
                setStepIndex((i) => Math.min(sampleSteps.length - 1, i + 1))
              }
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:bg-white/50 disabled:text-slate-500"
              disabled={stepIndex === sampleSteps.length - 1}
            >
              Next
            </button>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/40 p-4 text-sm text-slate-100">
            <div className="font-mono text-xs text-blue-100">{current.line}</div>
            <p className="mt-2 text-slate-200">{current.note}</p>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <MemoryPanel title="Stack" cells={current.stack} accent="blue" />
          <MemoryPanel title="Heap" cells={current.heap} accent="emerald" />
          <MemoryPanel
            title="Channels"
            cells={current.channels}
            accent="amber"
          />
          <MemoryPanel
            title="Goroutines"
            cells={current.goroutines}
            accent="violet"
          />
        </div>
      </div>
    </div>
  );
}

function MemoryPanel({
  title,
  cells,
  accent,
}: {
  title: string;
  cells: MemoryCell[];
  accent: "blue" | "emerald" | "amber" | "violet";
}) {
  const accentColor: Record<typeof accent, string> = {
    blue: "border-blue-400/40 bg-blue-500/5 text-blue-100",
    emerald: "border-emerald-400/40 bg-emerald-500/5 text-emerald-100",
    amber: "border-amber-400/40 bg-amber-500/5 text-amber-100",
    violet: "border-violet-400/40 bg-violet-500/5 text-violet-100",
  };

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between text-sm text-slate-200">
        <span className="font-semibold">{title}</span>
        <span className="text-xs text-slate-400">
          {cells.length ? `${cells.length} entries` : "empty"}
        </span>
      </div>
      {cells.length === 0 ? (
        <div className="mt-3 rounded-lg border border-white/5 bg-black/30 px-3 py-2 text-xs text-slate-500">
          No allocations yet.
        </div>
      ) : (
        <div className="mt-3 grid gap-2">
          {cells.map((cell) => (
            <div
              key={`${title}-${cell.label}-${cell.value}`}
              className={`flex items-center justify-between rounded-lg border px-3 py-2 text-sm shadow-sm ${accentColor[accent]} ${
                cell.emphasis ? "ring-2 ring-white/30" : ""
              }`}
            >
              <span className="font-semibold">{cell.label}</span>
              <span className="font-mono text-xs">{cell.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

