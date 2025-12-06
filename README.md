# GolangViz — Visual, Interactive Go Learning (Frontend Only)

Open-source, visual-first Golang curriculum inspired by Go by Example, VisualGo, Python Tutor, Roadmap.sh, and Go docs. Everything runs on the frontend; static-export friendly.

## Features (current)
- Landing with navigation, hero, feature grid, curriculum outline, roadmap.
- Interactive stubs: memory stepper, channel debugger, scheduler view, slice growth lab.
- Search bar (client filter), quizzes, cheat-sheets with downloadable PDF placeholder.
- Dark, minimal UI (Tailwind v4, Next.js App Router, TS).

## Roadmap
See `ROADMAP.md` for phase status (blue ticks = done, yellow = in progress).

## Getting started
```bash
npm install
npm run dev
# visit http://localhost:3000
```

## Static export (frontend-only deployment)
`next.config.ts` is set to `output: "export"` and `images.unoptimized`. Build and export static assets:
```bash
npm run build
npm run export   # outputs to ./out
```
Host `./out` on GitHub Pages, Cloudflare Pages, Netlify, or any static host.

## Project structure
- `src/app/page.tsx` — main landing + sections.
- `src/components/*` — UI building blocks (sections, feature grid, hero, nav, etc).
- `src/components/visualizers/*` — channel debugger, scheduler view, slice growth lab, mini playground.
- `public/notes.pdf` — placeholder downloadable notes/cheatsheet.
- `ROADMAP.md` — phased plan with status.

## Planned next steps
- MDX content for Foundation, Memory, Concurrency, Advanced modules.
- WASM sandbox (tinygo/wasm_exec) with step events for stack/heap/channels/goroutines.
- Additional visuals: maps/buckets, interfaces (itab/data), struct padding, GC lifecycle.
- Search backed by static index or edge function; quizzes tied to chapters; contribution guide.

## License
MIT. Contributions welcome.
