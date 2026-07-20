# Navpahal

Aware. Engage. Empower.

A community empowerment platform bridging institutional resources with grassroots needs for sustainable community development.

## Current Scope

This repository contains the **frontend MVP** of the Navpahal platform. It is a client-side React single-page application with:

- Public pages: Home, About, Programs, Training, Get Involved, Impact, Resources, Contact
- Volunteer registration form (browser localStorage only)
- Contact form (browser localStorage only)
- Responsive design for mobile and desktop
- Keyboard-accessible navigation

### Service Boundary

> In an active emergency, contact the appropriate official emergency service immediately. Navpahal provides awareness, preparedness and community training; it does not replace doctors, hospitals, police, fire services, ambulances or professional emergency responders.

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
| `npm run test:e2e` | Run Playwright end-to-end tests |

## Architecture Direction

See [docs/architecture/README.md](docs/architecture/README.md) for the full architecture plan.

- **Today**: Frontend-only SPA, no backend, no database
- **Target**: Modular monolith backend introduced through approved vertical slices
- **Not yet**: Authentication, API, admin panel, emergency features

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
