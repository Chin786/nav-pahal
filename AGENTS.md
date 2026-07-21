## Objective
- Migrate the Vite React application to Next.js 16 App Router while preserving Sprint 0 and Sprint 1 behavior, visual design, content governance, accessibility, and safety boundaries.

## Important Details
- Branch: `sprint-2/nextjs-migration` — do not create other branches, do not push to main, do not open/merge PRs
- Sprint 2 is framework migration only — no Supabase, database, auth, API endpoints, or active forms
- All Sprint 0 safety controls must be preserved (disabled forms, service boundary, no fabricated claims, no localStorage)
- Content governance with status badges must remain intact
- Server Components by default; `"use client"` only where React hooks, browser APIs, or motion are used
- Vite, React Router, `index.html`, `src/main.tsx` have been removed
- Next.js 16.2.11 installed; React 19, Motion, Lucide React, Vitest, Testing Library, Playwright retained
- PostCSS with `@tailwindcss/postcss` installed; `next.config.ts` includes security headers
- All eight routes generate statically: `/`, `/about`, `/programs`, `/training`, `/get-involved`, `/impact`, `/resources`, `/contact`
- Final commit message: `feat: migrate frontend to nextjs app router`

## Work State
### Completed
- Sprint 1 review findings closed and pushed (`3884e30`)
- npm deps installed: `next@16.2.11`, `@next/eslint-plugin-next`, `postcss`, `@tailwindcss/postcss`, `rimraf`
- Vite, `@vitejs/plugin-react`, `react-router-dom`, `@tailwindcss/vite` removed
- `app/` directory structure created with all eight route folders + `not-found`
- `app/globals.css`, `app/layout.tsx`, all route pages created
- `"use client"` added to interactive components (Header, Footer, Hero, Foundation, Pillars, Services, Volunteers, Contact, Notice, PageHero)
- Header migrated to `next/link` and `next/navigation`
- SkipLink, Experts, Container, StatusBadge, PlaceholderPanel as Server Components
- `next.config.ts`, `postcss.config.mjs`, `next-env.d.ts` created
- `tsconfig.json` updated (Next.js default pattern with `jsx: "react-jsx"`, `@/*` path alias, `next` plugin)
- `eslint.config.js` updated with `@next/eslint-plugin` recommended + core-web-vitals rules
- `vitest.config.ts` updated (Next.js-compatible, no Vite dependency, `next/navigation` + `next/link` mocks)
- `playwright.config.ts` updated for `next start` webServer on port 3000
- Unit tests rewritten to test components directly (no React Router), all 20 tests passing
- `src/App.tsx`, `src/pages/`, `src/hooks/`, `index.html`, `src/main.tsx`, `vite.config.ts`, `tsconfig.app.json`, `tsconfig.node.json` removed
- Build verified: all 8 routes generate statically with Next.js 16.2.11

### Active
- (none)

### Blocked
- (none)

## Next Move
1. Run `npm run check` (format:check, lint, typecheck, test, build) and `npm run test:e2e`
2. Commit all changes

## Relevant Files
- `app/layout.tsx`: root layout with SkipLink, Header, Footer, main landmark
- `app/page.tsx`: home page importing Hero, Foundation, Pillars, Services, Experts, Volunteers, Contact
- `app/*/page.tsx`: all eight route pages with per-route metadata exports
- `src/components/Header.tsx`: migrated to `next/link` + `usePathname` with "use client"
- `next.config.ts`: security headers, strict mode
- `tsconfig.json`: Next.js config with `@/*` alias, `next` plugin, `jsx: "react-jsx"`
- `eslint.config.js`: Next.js recommended + core-web-vitals rules
- `vitest.config.ts`: Next.js-compatible, JSX automatic runtime, navigation mocks
- `playwright.config.ts`: `next start` on port 3000
- `src/test/__mocks__/next-navigation.ts`: mock for `next/navigation`
- `src/test/__mocks__/next-link.tsx`: mock for `next/link`
