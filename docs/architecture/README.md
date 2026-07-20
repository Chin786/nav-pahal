# Navpahal Architecture

## Current State — Frontend Baseline (Sprint 0)

The application is a **client-side React SPA** built with:

- **React 19** + **TypeScript** (strict mode)
- **Vite** for dev server and production builds
- **Tailwind CSS 4** for styling
- **Motion** (Framer Motion) for animations
- **React Router** for client-side routing

### Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Landing page with all core sections |
| `/about` | About | Mission and vision (placeholder) |
| `/programs` | Programs | Program listings (placeholder) |
| `/training` | Training | Training content (placeholder) |
| `/get-involved` | Get Involved | Volunteer registration (disabled state) |
| `/impact` | Impact | Impact metrics (placeholder) |
| `/resources` | Resources | Resource center (placeholder) |
| `/contact` | Contact | Contact form (disabled state) |
| `*` | NotFound | 404 page |

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

- No backend, API, or database
- No authentication or authorization
- No server-side rendering
- No CMS or admin interface
- No emergency SOS capability
- No medical consultation workflow
- No data collection or form submission processing

## Target Architecture — Modular Monolith

The long-term target is a **modular monolith** backend with:

- **API layer**: REST or GraphQL endpoints
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
