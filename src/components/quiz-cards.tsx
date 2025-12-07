"use client";

import { useState } from "react";

type Quiz = {
  id: number;
  question: string;
  choices: string[];
  answer: number;
  explanation: string;
};

const quizzes: Quiz[] = [
  {
    id: 1,
    question: "When does a value typically escape to the heap?",
    choices: [
      "When its address leaks beyond the stack frame",
      "Whenever it is larger than 64 bytes",
      "All values live on the heap by default",
      "Only when using goroutines",
    ],
    answer: 0,
    explanation:
      "Escape analysis moves values to heap when their address/reference outlives the stack frame.",
  },
  {
    id: 2,
    question: "What happens when sending to a full buffered channel?",
    choices: [
      "Send panics immediately",
      "Send blocks until space frees",
      "Send drops the oldest value",
      "Send overwrites the last value",
    ],
    answer: 1,
    explanation:
      "Sends to a full buffered channel block until a receiver makes room (unless select chooses a default).",
  },
  {
    id: 3,
    question: "How are interface values represented?",
    choices: [
      "Single pointer to data",
      "Struct of { itab*, data* }",
      "Slice header (ptr, len, cap)",
      "Map bucket with type IDs",
    ],
    answer: 1,
    explanation:
      "Interfaces are fat pointers: itab/type info pointer + data pointer (or data inline for some cases).",
  },
];

export function QuizCards() {
  return (
    <div className="surface rounded-2xl p-5 shadow-lg shadow-amber-500/10">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.2em] text-amber-700 dark:text-amber-200">
          Quizzes
        </p>
        <h3 className="text-lg font-semibold text-[var(--foreground)] dark:text-white">
          Quick checks for understanding
        </h3>
        <p className="text-sm text-[var(--muted)]">
          Multiple-choice with inline explanations—expand to see why.
        </p>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
}

function QuizCard({ quiz }: { quiz: Quiz }) {
  const [selected, setSelected] = useState<number | null>(null);
  const isCorrect = selected === quiz.answer;
  return (
    <div className="flex flex-col rounded-xl border border-[var(--panel-border)] bg-[var(--panel)] p-4 text-sm text-[var(--foreground)]">
      <div className="font-semibold text-[var(--foreground)] dark:text-white">
        {quiz.question}
      </div>
      <div className="mt-2 space-y-2">
        {quiz.choices.map((choice, idx) => (
          <button
            key={choice}
            onClick={() => setSelected(idx)}
            className={`w-full rounded-lg border px-3 py-2 text-left transition ${
              selected === idx
                ? idx === quiz.answer
                  ? "border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-400/40 dark:bg-emerald-500/10 dark:text-emerald-100"
                  : "border-rose-300 bg-rose-50 text-rose-900 dark:border-rose-400/40 dark:bg-rose-500/10 dark:text-rose-100"
                : "border-[var(--panel-border)] text-[var(--foreground)] hover:border-[var(--accent)] dark:border-white/10 dark:hover:border-white/30"
            }`}
          >
            {choice}
          </button>
        ))}
      </div>
      {selected !== null ? (
        <div
          className={`mt-3 rounded-lg border px-3 py-2 text-xs ${
            isCorrect
              ? "border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-400/40 dark:bg-emerald-500/10 dark:text-emerald-100"
              : "border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-400/40 dark:bg-amber-500/10 dark:text-amber-100"
          }`}
        >
          {quiz.explanation}
        </div>
      ) : null}
    </div>
  );
}

