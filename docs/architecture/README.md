# Navpahal Architecture

## Current State — Frontend Baseline (Sprint 2)

The application is a **Next.js 16 App Router** application built with:

- **React 19** + **TypeScript** (strict mode)
- **Next.js 16** with Turbopack for development, static generation for production
- **Tailwind CSS 4** via `@tailwindcss/postcss` for styling
- **Motion** for client-side animations
- **Lucide React** for icons

### Architecture

- **Server Components by default** — pages and leaf components are Server Components
- **Client Components** — components using React hooks, browser APIs, or Motion have a `"use client"` directive
- **Next.js Metadata API** — per-route `<title>` and `<meta name="description">` defined in each `page.tsx`
- **Static generation** — all eight public routes are statically generated at build time
- **Layout** — `app/layout.tsx` provides shared layout with SkipLink, Header, Footer, and `<main id="main-content">` landmark
- **Route-folder structure** — each route has its own folder under `app/` with a `page.tsx` file

### Routes

| Path            | Page         | Description                             |
| --------------- | ------------ | --------------------------------------- |
| `/`             | Home         | Landing page with all core sections     |
| `/about`        | About        | Mission and vision (placeholder)        |
| `/programs`     | Programs     | Program listings (placeholder)          |
| `/training`     | Training     | Training content (placeholder)          |
| `/get-involved` | Get Involved | Volunteer registration (disabled state) |
| `/impact`       | Impact       | Impact metrics (placeholder)            |
| `/resources`    | Resources    | Resource center (placeholder)           |
| `/contact`      | Contact      | Contact form (disabled state)           |
| `*`             | NotFound     | 404 page                                |

### Form Submissions

All forms (contact, volunteer, newsletter) are displayed in a **disabled state** with a visible disclosure:

> "Online submissions are not yet active. No information entered here is transmitted to Navpahal."

- Inputs are rendered but **disabled** and non-interactive
- Submit buttons are **disabled**
- No personal data is collected, stored, or transmitted
- No `localStorage` persistence is used

### Contact Details

No contact details are displayed. The placeholder text reads:

> "Official contact details will be published after verification."

### What Does Not Exist Yet

- No Route Handlers (API routes)
- No Server Actions
- No backend, API, or database
- No authentication or authorization
- No CMS or admin interface
- No emergency SOS capability
- No medical consultation workflow
- No data collection or form submission processing

### Security Headers

`next.config.ts` configures the following HTTP security headers:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Frame-Options: DENY`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

Content Security Policy (CSP) is not yet configured — it remains a future deployment task.

## Target Architecture — Modular Monolith

The long-term target is a **modular monolith** backend with:

- **API layer**: Route Handlers or external API
- **Auth service**: User registration, login, roles
- **Data layer**: PostgreSQL or equivalent
- **Admin panel**: For verified administrators only
- **File storage**: For documents and media

### Principles

1. **Backend will be introduced through approved vertical slices** — not as a big-bang rewrite
2. **No emergency/SOS functionality** without explicit governance approval
3. **All quantitative claims** must be verified before publication
4. **No automatic approvals** for volunteers or experts
5. **No simulated data** presented as production data
6. **No form submissions** until a backend, privacy process, and data handling policy are in place

## Development Workflow

- Work on feature branches off `main`
- Open pull requests for review before merging
- CI runs: format, lint, typecheck, unit tests, build, e2e tests
- TypeScript strict mode is enforced
- No secrets in source code
- All routes are fully static — no server runtime required
