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
| `/get-involved` | Get Involved | Volunteer registration form |
| `/impact` | Impact | Impact metrics (placeholder) |
| `/resources` | Resources | Resource center (placeholder) |
| `/contact` | Contact | Contact form and information |
| `*` | NotFound | 404 page |

### Data Persistence

All form submissions are stored in **browser `localStorage`** only. This is explicitly not production persistence and will be replaced when a backend is introduced.

### What Does Not Exist Yet

- No backend, API, or database
- No authentication or authorization
- No server-side rendering
- No CMS or admin interface
- No emergency SOS capability
- No medical consultation workflow

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

## Development Workflow

- Work on feature branches off `main`
- Open pull requests for review before merging
- CI runs: format, lint, typecheck, unit tests, build, e2e tests
- TypeScript strict mode is enforced
- No secrets in source code
