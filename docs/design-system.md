# Design System

## Tokens

Design tokens are defined as CSS custom properties in `src/index.css` under the `:root` selector.

### Brand Colours

| Token                | Value     | Usage                                 |
| -------------------- | --------- | ------------------------------------- |
| `--color-primary`    | `#0072ce` | Primary brand colour, links, headings |
| `--color-secondary`  | `#72bf44` | Secondary brand colour, accents       |
| `--color-accent`     | `#f7941d` | Tertiary/accent colour, CTAs          |
| `--color-surface`    | `#ffffff` | Card and surface backgrounds          |
| `--color-bg`         | `#f7f9fb` | Page background                       |
| `--color-text`       | `#191c1e` | Primary text colour                   |
| `--color-text-muted` | `#44474e` | Secondary/muted text colour           |

### Semantic Colours

| Token             | Value     | Usage                |
| ----------------- | --------- | -------------------- |
| `--color-success` | `#2e7d32` | Success states       |
| `--color-warning` | `#f57f17` | Warning states       |
| `--color-error`   | `#c62828` | Error states         |
| `--color-info`    | `#0072ce` | Informational states |

### Focus Ring

| Token          | Value                              |
| -------------- | ---------------------------------- |
| `--focus-ring` | `0 0 0 3px rgba(0, 114, 206, 0.4)` |

### Layout

| Token                 | Value   |
| --------------------- | ------- |
| `--content-max-width` | `80rem` |

### Typography

The font stack uses Inter for body text and Montserrat for headings, loaded from Google Fonts.

| Token             | Value                               |
| ----------------- | ----------------------------------- |
| `--font-sans`     | `"Inter", system-ui, sans-serif`    |
| `--font-headline` | `"Montserrat", "Inter", sans-serif` |

### Border Radius

| Token          | Value     |
| -------------- | --------- |
| `--radius-sm`  | `0.25rem` |
| `--radius-md`  | `0.5rem`  |
| `--radius-lg`  | `0.75rem` |
| `--radius-xl`  | `1rem`    |
| `--radius-2xl` | `1.5rem`  |
| `--radius-3xl` | `2rem`    |

### Shadows

| Token           | Value                         |
| --------------- | ----------------------------- |
| `--shadow-sm`   | `0 1px 2px rgba(0,0,0,0.05)`  |
| `--shadow-md`   | `0 4px 6px rgba(0,0,0,0.07)`  |
| `--shadow-lg`   | `0 10px 15px rgba(0,0,0,0.1)` |
| `--shadow-card` | `0 4px 12px rgba(0,0,0,0.08)` |

## Shared Components

Located in `src/components/ui/`:

- **Container** — Wraps content with max-width and responsive padding.
- **SectionHeading** — Section heading with optional tag, subtitle, alignment, and heading level.
- **ButtonLink** — Styled link button with variants: primary, secondary, accent, outline.
- **Notice** — Alert banner with variants: info, success, warning, error. Supports dismiss.
- **StatusBadge** — Content status indicator: Draft, Proposed, Awaiting Verification, Under Development, Approved.
- **PlaceholderPanel** — Dashed-border placeholder for under-development sections.

## Accessibility Usage

- Skip link appears on focus at top of every page
- Main landmark (`<main>`) wraps page content
- Footer is a `<footer>` landmark
- Navigation uses `<nav>` with `aria-label="Main navigation"`
- Active nav links use `aria-current="page"`
- Mobile menu uses `aria-expanded` and `aria-controls`
- Escape key closes the mobile menu; focus returns to menu button
- Foundation accordion uses semantic `<button>` elements with `aria-expanded` and `aria-controls`
- Pillar detail modal: Escape closes, focus trap, `aria-labelledby`, backdrop click closes, focus returns to trigger
- All decorative icons use `aria-hidden="true"`
- Icon-only controls have accessible names via `aria-label`
- Forms have clear `aria-label` indicating they are not yet active
- Disabled controls are clearly explained with disclosure notices
- `prefers-reduced-motion` media query disables animations
- Focus ring uses `focus-ring` utility class

## Status Labels

Content status badges are used throughout to indicate the verification state of information:

- **Draft** — Content under development
- **Proposed** — Suggested content awaiting approval
- **Awaiting Verification** — Content requiring independent verification
- **Under Development** — Section or feature being built
- **Approved** — Verified and authorized content
