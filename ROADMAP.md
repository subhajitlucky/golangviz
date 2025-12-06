# GolangViz Roadmap

Status legend: 🟦 Done · 🔄 In Progress · ⬜ Not started

## Phase 0 — Foundations
- 🟦 Repo scaffolded with Next.js (App Router, TS, Tailwind v4).
- 🟦 MIT/open-source metadata set; import alias `@/*`.

## Phase 1 — Experience Shell
- 🟦 Navigation, hero, feature grid, curriculum outline, roadmap sections.
- 🟦 Dark visual theme and typography reset.

## Phase 2 — Visualizer Stubs
- 🟦 Static mini playground with stepper for stack/heap/channels/goroutines.
- 🟦 Component primitives for sections, cards, and grids.

## Phase 3 — Content & Tutorials
- 🔄 Author MDX-based chapters for Foundation, Memory, Concurrency, Advanced.
- 🟦 Quizzes and cheatsheets (initial cards + downloadable PDF placeholder).
- 🟦 Client-side search bar (static topics); MDX/edge search later.

## Phase 4 — Execution & Instrumentation
- ⬜ WASM sandbox runner (tinygo/wasm_exec) with step events.
- ⬜ Snapshot hooks for stack/heap, channels, goroutine state transitions.
- ⬜ Safety guards: timeouts, memory caps, sandboxed worker.

## Phase 5 — Deep Visualizers
- 🟦 Channels debugger (buffered/unbuffered, blocking highlights).
- 🟦 Goroutine scheduler timeline (P, run queue, waiting/runnable states).
- 🟦 Data structures: slices (growth + realloc generations).
- ⬜ Maps, interfaces, struct padding, GC lifecycle animations.

## Phase 6 — Productization
- ⬜ SEO/meta, sitemap/static export, offline-friendly assets.
- ⬜ Deploy to static hosting (GitHub Pages/Cloudflare Pages/Netlify).
- ⬜ Optional edge functions for search/telemetry (if needed).

## Phase 7 — Community & AI Assist
- ⬜ Saved sessions/sharable links.
- ⬜ AI hints and auto-diagram generation from snippets.
- ⬜ Contribution guide and starter issues.

