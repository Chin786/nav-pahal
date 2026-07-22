# Vite to Next.js 16 Migration

## Purpose

Migrate the client-side Vite React SPA to a Next.js 16 App Router architecture to enable server-side rendering, improved SEO, static generation, and a path toward a full-stack application.

## Base / Rollback Commit

Base commit: `aa113ac`

To roll back the migration using only non-destructive Git operations:

```bash
# View the migration commits since the base
git log --oneline --reverse aa113ac..HEAD

# Revert each migration commit in reverse order (newest first)
git revert --no-commit <newest-commit-hash>
git revert --no-commit <next-commit-hash>
git commit -m "revert: roll back nextjs migration"

# Verify rollback
npm ci
npm run dev
```

> Note: If the branch has additional non-migration commits beyond the migration, revert only the migration commits using `git revert <hash>` for each one, rather than a range revert.

## Files Removed

### Vite configuration and entry points

- `vite.config.ts` — Vite build configuration
- `index.html` — Vite HTML entry point
- `tsconfig.app.json` — Vite app TypeScript config
- `tsconfig.node.json` — Vite Node TypeScript config
- `src/main.tsx` — React DOM entry with BrowserRouter

### Dependencies Removed

- `vite` and `@vitejs/plugin-react` — Vite build tool and React plugin
- `react-router-dom` — client-side routing
- `@tailwindcss/vite` — Vite-specific Tailwind CSS plugin

### Old page structure

- `src/pages/About.tsx`, `ContactPage.tsx`, `GetInvolved.tsx`, `Home.tsx`, `Impact.tsx`, `NotFound.tsx`, `Programs.tsx`, `Resources.tsx`, `Training.tsx`
- `src/App.tsx` — React Router root component
- `src/hooks/usePageMetadata.ts` — replaced by Next.js Metadata API

## Files Added

### Next.js configuration

- `next.config.ts` — Next.js configuration with security headers and Turbopack
- `postcss.config.mjs` — PostCSS with `@tailwindcss/postcss`
- `next-env.d.ts` — Next.js TypeScript declarations
- `tsconfig.json` (rewritten) — Next.js-optimized TypeScript config with `jsx: "react-jsx"`, `@/*` path alias, `next` plugin

### App Router structure

- `app/layout.tsx` — Root layout with SkipLink, Header, Footer, `<main id="main-content">`
- `app/globals.css` — Global styles adapted from `src/index.css` with Tailwind CSS 4
- `app/page.tsx` — Home route
- `app/not-found.tsx` — 404 page
- `app/about/page.tsx`, `app/programs/page.tsx`, `app/training/page.tsx`
- `app/get-involved/page.tsx`, `app/impact/page.tsx`, `app/resources/page.tsx`
- `app/contact/page.tsx`

### Test infrastructure

- `src/test/__mocks__/next-navigation.ts` — mock for `next/navigation`
- `src/test/__mocks__/next-link.tsx` — mock for `next/link`
- `vitest.config.ts` (rewritten) — JSX automatic runtime, navigation mocks, no Vite dependency

## Route Mapping

| Old (React Router)                | New (Next.js App Router)    |
| --------------------------------- | --------------------------- |
| `/` → Home.tsx                    | `app/page.tsx`              |
| `/about` → About.tsx              | `app/about/page.tsx`        |
| `/programs` → Programs.tsx        | `app/programs/page.tsx`     |
| `/training` → Training.tsx        | `app/training/page.tsx`     |
| `/get-involved` → GetInvolved.tsx | `app/get-involved/page.tsx` |
| `/impact` → Impact.tsx            | `app/impact/page.tsx`       |
| `/resources` → Resources.tsx      | `app/resources/page.tsx`    |
| `/contact` → ContactPage.tsx      | `app/contact/page.tsx`      |
| `*` → NotFound.tsx                | `app/not-found.tsx`         |

## React Router to App Router Migration

### Before (React Router)

```tsx
// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// ...
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</BrowserRouter>;
```

### After (Next.js App Router)

```tsx
// app/page.tsx
import Hero from "@/components/Hero";
export default function HomePage() {
  return <Hero />;
}
```

Layout is shared via `app/layout.tsx` instead of wrapping each page.

## Metadata Migration

### Before (usePageMetadata hook)

```tsx
import { usePageMetadata } from "./hooks/usePageMetadata";
usePageMetadata("Home", "Description");
```

### After (Next.js Metadata API)

```tsx
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home",
  description: "Description",
};
```

## CSS / PostCSS Migration

### Before

- `@tailwindcss/vite` Vite plugin
- Tailwind CSS directives in `src/index.css`
- CSS custom properties in `src/index.css`

### After

- `@tailwindcss/postcss` PostCSS plugin
- Tailwind CSS 4 import in `app/globals.css`
- CSS custom properties in `app/globals.css`
- `postcss.config.mjs` for PostCSS configuration

## Test Migration

### Unit Tests (Vitest)

- `vitest.config.ts` rewritten to remove Vite dependency
- `esbuild` configured with `jsx: "automatic"` for JSX transform
- Mock files added for `next/navigation` and `next/link`
- Route-level tests replaced with component-level tests

### End-to-End Tests (Playwright)

- `playwright.config.ts` updated: webServer uses `npm run start` on port 4173
- No test logic changes needed — same routes, same assertions

## Server / Client Component Decisions

| Component                                   | Type   | Reason                                                                   |
| ------------------------------------------- | ------ | ------------------------------------------------------------------------ |
| `app/layout.tsx`                            | Server | No hooks, browser APIs, or motion                                        |
| Route pages (`app/*/page.tsx`)              | Server | Pure JSX with metadata exports                                           |
| `SkipLink`                                  | Server | No hooks, browser APIs, or motion                                        |
| `Container`                                 | Server | Stateless wrapper                                                        |
| `StatusBadge`                               | Server | Pure render of props                                                     |
| `PlaceholderPanel`                          | Server | Pure render of props                                                     |
| `Notice`                                    | Server | Pure render of props (removed unused dismiss)                            |
| `PageHero` (`SectionHeading`, `ButtonLink`) | Server | No hooks, browser APIs, or motion                                        |
| `Header`                                    | Client | `useState`, `useEffect`, `usePathname`, `useRef`                         |
| `Footer`                                    | Client | `useState`, `navigator.clipboard`, `window.location`                     |
| `Hero`                                      | Client | `motion` animations                                                      |
| `Foundation`                                | Client | `useState`, `motion`, `AnimatePresence`                                  |
| `Pillars`                                   | Client | `useState`, `useRef`, `useCallback`, `useEffect`, browser APIs, `motion` |
| `Services`                                  | Client | `motion` with `layoutId`                                                 |
| `Volunteers`                                | Client | `motion.div`                                                             |
| `Contact`                                   | Client | `motion.div`                                                             |
| `Experts`                                   | Server | No hooks, browser APIs, or motion                                        |

## Security Headers

Configured in `next.config.ts` using the `headers()` function:

| Header                   | Value                                      |
| ------------------------ | ------------------------------------------ |
| `X-Content-Type-Options` | `nosniff`                                  |
| `Referrer-Policy`        | `strict-origin-when-cross-origin`          |
| `X-Frame-Options`        | `DENY`                                     |
| `Permissions-Policy`     | `camera=(), microphone=(), geolocation=()` |

Content Security Policy (CSP) is intentionally left for a future deployment task.

## Known Limitations

- No Route Handlers or API routes
- No Server Actions
- Content Security Policy not yet configured
- All forms remain disabled
- No backend, database, or authentication
- Build output increased due to Next.js framework overhead vs. plain Vite SPA
- Development server (Turbopack) may use more memory than Vite

## Rollback Procedure

To revert to the Vite-based application using only `git revert`:

```bash
# Identify the migration commits
git log --oneline --reverse aa113ac..HEAD

# Revert each migration commit in reverse order (newest first)
git revert --no-commit <newest-commit-hash>
git revert --no-commit <next-commit-hash>
git commit -m "revert: roll back nextjs migration"

# Verify rollback
npm ci
npm run dev
```

> Note: If the branch has additional non-migration commits beyond the migration, revert only the migration commits using `git revert <hash>` for each one, rather than a range revert.
