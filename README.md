# Navpahal

Aware. Engage. Empower.

A community empowerment platform bridging institutional resources with grassroots needs for sustainable community development.

## Current Scope (Sprint 1)

This repository contains the **frontend MVP** of the Navpahal platform. It is a client-side React single-page application with **no backend, no database, and no data collection**.

### Sprint 1 — Content, Design System, and Accessibility Foundation

Sprint 1 establishes a consistent, accessible, and maintainable public NGO website foundation:

- **Design tokens**: CSS custom properties for brand colours, spacing, typography, shadows, and focus rings
- **Reusable UI components**: Container, SectionHeading, ButtonLink, Notice, StatusBadge, PlaceholderPanel
- **Site navigation**: `aria-current="page"` on active links, keyboard-operable mobile menu, Escape to close, focus management
- **Skip navigation**: "Skip to main content" link visible on keyboard focus
- **Landmarks**: Unique `<main>` landmark, accessible `<footer>`, page-level `<h1>` on every route
- **Centralized content**: Typed content structure in `src/content/siteContent.ts`
- **Content integrity**: Status badges (Draft, Proposed, Awaiting Verification, Under Development)
- **Page metadata**: Route-aware document titles and meta descriptions
- **Accessibility**: WCAG-friendly contrast, focus indicators, `aria-hidden` on decorative icons, `prefers-reduced-motion`
- **Disabled forms**: Contact, volunteer, and newsletter forms remain disabled with disclosure notices
- **No fabricated claims**: All unsafe content removed and safeguarded

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
- All forms are disabled (no data submission)
- No verified contact details published
- No verified impact metrics
- No certification or accreditation offered
- Not yet tested for formal WCAG compliance
- Canonical domain not yet confirmed

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
| `npm run dev` | Start development server |
| `npm run build` | Production build (typecheck + vite build) |
| `npm run preview` | Preview production build |
| `npm run format:check` | Check formatting with Prettier |
| `npm run format` | Auto-format code |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript compiler check |
| `npm run test` | Run unit tests with Vitest |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run test:e2e` | Run Playwright e2e tests against production build |
| `npm run check` | Run all checks: format, lint, typecheck, unit tests, build |
| `npm run check-all` | Run all checks including e2e tests |

## Current Routes

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

- **Today**: Frontend-only SPA, no backend, no database, no data collection
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
