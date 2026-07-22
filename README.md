# Navpahal

Aware. Engage. Empower.

A community empowerment platform bridging institutional resources with grassroots needs for sustainable community development.

## Current Scope (Sprint 2)

This repository contains the **frontend** of the Navpahal platform. It is a **Next.js 16 App Router** application with **no backend, no database, and no data collection**.

### Sprint 2 — Next.js App Router Migration

Sprint 2 migrates the client-side SPA to a Next.js 16 App Router architecture:

- **Next.js 16** with App Router, Turbopack, and static generation
- **React 19** with automatic JSX runtime
- **TypeScript** strict mode
- **Tailwind CSS 4** through `@tailwindcss/postcss`
- **Server Components by default** — Client Components only where React hooks, browser APIs, or motion are required
- **Eight public routes**: `/`, `/about`, `/programs`, `/training`, `/get-involved`, `/impact`, `/resources`, `/contact`
- **Static governed content** — all content is statically generated at build time
- **Metadata API** — per-route `<title>` and `<meta name="description">`
- **Disabled forms** — Contact, volunteer, and newsletter forms remain disabled with disclosure notices
- **No personal information** is collected, stored, or transmitted
- **No fabricated claims** — all unsafe content removed and safeguarded
- **Security headers** configured via `next.config.ts` (X-Content-Type-Options, Referrer-Policy, X-Frame-Options, Permissions-Policy)
- **CSP remains a future deployment task** — Content Security Policy is not yet configured

### Important Notices

> **Submission Disclosure:** Online submissions are not yet active. No information entered here is transmitted to Navpahal.

> **Service Boundary:** In an active emergency, contact the appropriate official emergency service immediately. Navpahal provides awareness, preparedness and community training; it does not replace doctors, hospitals, police, fire services, ambulances or professional emergency responders.

### Content Status Conventions

Content throughout the site uses status badges to indicate verification state:

| Status | Meaning |
|--------|---------|
| Draft | Content under development |
| Proposed | Suggested content awaiting approval |
| Awaiting Verification | Content requiring independent verification |
| Under Development | Section or feature being built |
| Approved | Verified and authorized content |

See [docs/content-governance.md](docs/content-governance.md) for the full governance framework.

### Accessibility Features Implemented

- Skip-to-content link visible on keyboard focus
- Main landmark on every page
- Accessible footer landmark
- Page-level h1 on every route
- Active navigation links use `aria-current="page"`
- Mobile menu: keyboard-operable, Escape to close, focus returns to trigger
- Foundation accordion: semantic `<button>` elements with `aria-expanded` and `aria-controls`
- Pillar detail modal: Escape closes, focus trap, backdrop click closes, focus returns to trigger
- All decorative icons use `aria-hidden="true"`
- Icon-only controls have accessible names
- Disabled forms are clearly explained
- `prefers-reduced-motion` disables animations
- Focus ring utility class applied to interactive elements

### Known Limitations

- No backend, authentication, or database
- No Route Handlers or Server Actions
- All forms are disabled (no data submission)
- No verified contact details published
- No verified impact metrics
- No certification or accreditation offered
- Not yet tested for formal WCAG compliance
- Canonical domain not yet confirmed
- Content Security Policy not yet configured

## Prerequisites

- Node.js 20+
- npm 10+

## Local Setup

```bash
npm ci
npm run dev
```

The app runs at `http://localhost:3000`.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js development server |
| `npm run build` | Production build with TypeScript check |
| `npm run start` | Start production server |
| `npm run clean` | Remove build output directories (`.next`, `out`, `dist`) |
| `npm run format:check` | Check formatting with Prettier |
| `npm run format` | Auto-format code |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript compiler check |
| `npm run test` | Run unit tests with Vitest |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run test:e2e` | Run Playwright e2e tests (builds and starts production server) |
| `npm run check` | Run all checks: format, lint, typecheck, unit tests, build |
| `npm run check-all` | Run all checks including e2e tests |

## Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About |
| `/programs` | Programs |
| `/training` | Training |
| `/get-involved` | Get Involved |
| `/impact` | Impact |
| `/resources` | Resources |
| `/contact` | Contact |
| `*` | 404 NotFound |

## Architecture Direction

See [docs/architecture/README.md](docs/architecture/README.md) for the full architecture plan.

- **Today**: Next.js 16 static frontend, no backend, no database, no data collection
- **Target**: Modular monolith backend introduced through approved vertical slices
- **Not yet**: Authentication, API, admin panel, emergency features, form submissions

## Branch Rules

- Do not push directly to `main`
- Create feature branches for all work
- Open pull requests and wait for review before merging

## Contributing

1. Create a branch from `main`
2. Make your changes
3. Run `npm run format:check && npm run lint && npm run typecheck && npm run test && npm run build`
4. Open a pull request with a description of changes

## License

Internal — Navpahal project.
