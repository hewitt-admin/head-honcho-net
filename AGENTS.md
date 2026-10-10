# Repository Guidance

## Project

This repository contains the Hewitt's Rocking H Trailer & ATV Repair website. It is a static-exported Next.js 14 application built with React, TypeScript, and Sass. GitHub Pages builds use the `/head-honcho-net` base path.

## Working in This Repository

- Follow the existing component, TypeScript, and Sass patterns; keep changes focused and avoid adding dependencies without a clear need.
- Keep user-facing business content and homepage/gallery data consistent with the existing source in `lib/site-data.ts`.
- Store website assets in `public/` and reference them using the existing base-path-aware conventions.
- Preserve static-export compatibility. Avoid server-only features and check that links, assets, and routes work with the GitHub Pages base path.
- Add or update focused tests for behavior changes. Use the scripts in `package.json` rather than introducing alternate tooling.
- Do not edit generated build output or unrelated working-tree changes.

## Validation

Use pnpm (the repository pins pnpm 10.12.1) and Node.js 20, matching CI:

- `pnpm test` — run Vitest tests.
- `pnpm lint` — run Next.js lint checks.
- `pnpm typecheck` — check TypeScript types.
- `pnpm build` — build the static site.

Run the checks relevant to the change; for broader application changes, run all four.

## Changes and Releases

Before opening a pull request, follow the change-entry and release instructions in [README.md](README.md), including running `pnpm cl:change` for user-visible changes. Do not manually edit generated changelogs or version data unless the release workflow requires it.
