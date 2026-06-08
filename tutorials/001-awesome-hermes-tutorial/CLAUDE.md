# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tutorial website: "Build Your First Hermes Agent with Novita AI". Multi-page static site built with Vite + React + React Router, deployed to Vercel.

- **Live URL**: https://awesome-hermes-tutorial.vercel.app
- **Vercel project**: alexs-projects-86c60082/awesome-hermes-tutorial

## Commands

- `npm run dev` — start dev server (add `-- --host 0.0.0.0` for LAN access)
- `npm run build` — production build to `dist/`
- `npm run lint` — ESLint
- `npm run preview` — preview production build locally
- `vercel --prod --yes` — deploy to Vercel production

## Architecture

Multi-page static site using React Router v7 (`createBrowserRouter`) with a shared layout. No state management, no backend. Vercel's `vercel.json` rewrites all paths to `index.html` for client-side routing.

### Routing (`src/router.jsx`)

All routes share a `Layout` wrapper (nav + footer + scroll-to-top):

| Route | Page | Purpose |
|---|---|---|
| `/` | `HomePage` | Hero, Hermes intro, tutorial steps, use-case cards, references |
| `/novita` | `NovitaGuidePage` | Novita AI provider-specific setup guide |
| `/event` | `EventPage` | Upcoming event placeholder (TBD details) |
| `/email-agent` | `EmailAgentPage` | Email Agent use-case guide (placeholder) |
| `/marketing-agent` | `MarketingAgentPage` | Marketing Agent use-case guide (placeholder) |

### Shared Components (`src/components/`)

| Component | Props | Used by |
|---|---|---|
| `Layout` | — | Router wrapper: nav, `<Outlet>`, footer, scroll-to-top on route change |
| `CodeBlock` | `code`, `language` | HomePage, NovitaGuidePage — code snippets with copy button |
| `Step` | `number`, `title`, `last`, `children` | HomePage, NovitaGuidePage — vertical timeline layout (`.step-rail` + `.step-line`) |
| `PageHero` | `tag`, `title`, `subtitle`, `children` | NovitaGuidePage, EventPage — sub-page hero banner |
| `GuideCard` | `to`, `icon`, `title`, `description`, `disabled` | HomePage — links to provider guide pages |

### Styling

- `src/index.css` — CSS variables (colors, fonts, spacing), reset, base styles
- Each component and page has a co-located `.css` file
- Light theme with amber (`--accent: #e8930a`) and indigo (`--indigo: #5b63e0`) accents
- Fonts loaded via Google Fonts in `index.html`: Instrument Serif (hero titles), DM Sans (body/headings), JetBrains Mono (code)

## Content Conventions

- Tutorial steps use the `Step` component with a `last` prop on the final step (hides the connecting line)
- `.step-img-placeholder` class for steps awaiting screenshots (dashed border box)
- `.step-screenshot` class for actual screenshot images within steps
- New provider guides should follow `NovitaGuidePage` as a template: `PageHero` + "Why Provider" section + `Step`-based setup walkthrough

## Image Assets

All in `public/images/`. Screenshot filenames have spaces and mixed case — keep this consistent when adding new ones.
