# Novita Design Tokens

This folder contains Novita visual tokens extracted from CSSOM frequency analysis. Treat these files as reference material for new Novita-branded launch pages or visual refreshes.

## Files

- [`design-system.md`](./design-system.md): Human-readable summary of colors, typography, spacing, radius, responsive evidence, and usage guardrails.
- [`tokens.json`](./tokens.json): Structured design tokens suitable for tooling or conversion.
- [`tokens.css`](./tokens.css): CSS custom properties under `:root`.
- [`tailwind-theme.css`](./tailwind-theme.css): Tailwind v4-style `@theme` token block.

## Project Fit

These tokens are useful for this repository because both current projects are Novita-related. They should not be blindly imported into existing pages, because those pages already have distinct local art direction and CSS variables. Use them when:

- starting a new Novita campaign page;
- aligning buttons, spacing, neutral colors, or green accent usage;
- creating a Tailwind v4 project that needs a Novita token baseline;
- auditing a page for consistency with Novita's extracted visual system.

Avoid using them as a drop-in replacement for an existing page stylesheet unless that page is intentionally being redesigned.
