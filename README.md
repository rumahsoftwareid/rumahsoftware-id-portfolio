# Rumah Software ID — Portfolio

Personal/brand portfolio for **Rumah Software ID** — positioning: *Web
Developer & AI Systems Builder & Orchestrator*. A single-page site in
Indonesian and English (language switcher, Indonesian by default), built
with real, verified project data only — see [`src/data/projects.ts`](src/data/projects.ts)
for the source of truth and the note at the top of that file about not
inventing achievements or links.

## Stack

- [Vite](https://vite.dev/) + React 19 + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite` (CSS-first config, see `src/index.css`'s `@theme` block for the color tokens)
- [Vitest](https://vitest.dev/) + Testing Library for tests
- [oxlint](https://oxc.rs/docs/guide/usage/linter) for linting

## Project structure

```
src/
  components/      UI building blocks (one file per section + shared bits)
  data/             projects.ts, stack.ts, contact.ts -- the only place
                     content lives; edit these, not the components, to
                     update what the site says
  i18n/             translations.ts (id/en strings) + LanguageContext
  lib/              tiny shared helpers (cn())
  test/             Vitest setup
```

## Local development

```bash
npm install
npm run dev          # http://localhost:5173/rumahsoftware-id-portfolio/
```

## Checks

```bash
npm run typecheck    # tsc -b --noEmit
npm run lint         # oxlint
npm run test         # vitest run
npm run build         # tsc -b && vite build -> dist/
npm run preview       # serve the production build locally
```

Known, accepted lint warning: `src/i18n/LanguageContext.tsx` exports both
the `LanguageProvider` component and the `useLanguage` hook from one file,
which the React Fast Refresh lint rule flags (severity `warn` in
`.oxlintrc.json`, not an error) — this is a standard context+hook pairing
pattern; splitting it into two files for that one dev-experience warning
wasn't judged worth the extra indirection for a site this size.

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` builds and deploys `dist/` to GitHub Pages
automatically on every push to `main`, using the repo's **GitHub Pages
"GitHub Actions" source** (not the legacy `gh-pages` branch). One-time setup
on GitHub, after this repo is pushed:

1. Repo **Settings → Pages → Build and deployment → Source** → select
   **GitHub Actions**.
2. Push to `main` — the workflow runs, and the site publishes to
   `https://<your-username>.github.io/rumahsoftware-id-portfolio/`.

`vite.config.ts` sets `base: '/rumahsoftware-id-portfolio/'` to match that
project-site URL path. If you rename the repo, or deploy to a *user* site
(`<username>.github.io` repo) or a custom domain instead, update `base`
accordingly (`'/'` for a user site or custom domain) and the canonical/OG
URLs in `index.html`.

This workflow has **not been run yet** — it was authored and the build it
runs locally (`npm run build`) was verified, but it has not been exercised
by an actual GitHub Actions run or a live Pages deployment, since this
repo has not been pushed. See "Before you deploy" below.

## Before you deploy

- **Contact email**: `src/data/contact.ts` deliberately leaves `email`
  unset — no real address was available to put there without inventing
  one. Fill it in when you have one; the Contact section picks it up
  automatically.
- **Username in canonical/OG URLs**: `index.html` hardcodes
  `https://rumahsoftwareid.github.io/rumahsoftware-id-portfolio/` as the
  canonical and Open Graph URL, matching the `rumahsoftwareid` GitHub
  account this was built against. Update both `<link rel="canonical">`
  and the `og:url`/`twitter` tags if that ever changes.
- **Preview image**: no `og:image` is set (none existed to reference
  honestly). Add one (and the corresponding meta tag) if you want a rich
  social-share preview.
- **Local git remotes elsewhere in this environment** (`allinone`,
  `platformpendidikan`) still point at `github.com/guliebmod/...` after
  the account was renamed to `rumahsoftwareid` — GitHub's redirect from
  the old username should keep them working, but it's worth updating the
  remotes directly at some point. Unrelated to this repo, noted here only
  because it was observed while building it.
