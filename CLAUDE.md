# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A static, no-build Arabic (RTL) catalog site that showcases Apqrinu's Salla theme products. Two pages only:

- `index.html` — grid of all themes with a sort filter (default / most sections / most blocks / most features).
- `theme.html?id=<slug>` — detail page for one theme; reads the `id` query param and looks the theme up in `THEMES`.

There is **no build step, no package.json, and no tests at the repo root**. Open `index.html` directly in a browser or serve the folder with any static server (e.g. `npx serve .`, VS Code Live Server). All styling lives in `assets/css/style.css`; all behaviour in `assets/js/`.

## Data model (the file you will edit most)

`assets/js/data.js` is a single `const THEMES = [...]` array auto-generated from each theme repo's `twilight.json` on `github.com/apqrinu/*`. Both `main.js` (grid) and `theme.js` (detail) read from this array — adding a theme = appending one object here. The file header documents the schema; the important rules:

- `sectionsCount` ← `components.length` from the source `twilight.json`.
- `blocksCount` ← sum of `fields.length` across all components.
- `sections[].image` ← real Salla CDN image URL when one exists, otherwise `""` (the renderer falls back to a generated SVG placeholder — see `placeholderCover` in `main.js` and `placeholderSection` in `theme.js`).
- `sections[].icon` ← a `sicon-*` class copied verbatim from `twilight.json`; `icons.js` maps it to a local Phosphor-style SVG via `SALLA_MAP`. Unmapped `sicon-*` values render the generic fallback — extend `SALLA_MAP` rather than introducing new icon keys ad-hoc.
- `features[]` ← hand-curated Arabic dictionary keyed off the theme slug (these are *not* auto-derived from `twilight.json`).
- `preview` ← live `demostore.salla.sa/...` URL, or `""` if the theme is not yet published. When `""`, the preview button is hidden.

The existing 12 entries (`tabby`, `style`, `waead`, `sarie`, `el-baraka`, `shop`, `view`, `tamayaz`, `bon`, `tamim`, `glow`, `rawea`) are the canonical examples of the full shape. Use one of them as a template; `glow` (وهج) and `tamim` (تميم) are good reference points.

## Hardcoded counters vs runtime

`index.html` ships with `<strong id="themesCountChip">11</strong>` and `<strong id="themesCountHero">11</strong>` as server-side placeholders. `main.js` overwrites both with `THEMES.length` on load (along with `#sectionsTotal` and `#blocksTotal`). Don't bother keeping these placeholder numbers in sync with `THEMES.length` — they're cosmetic for the no-JS state.

## Icons

`assets/js/icons.js` exposes one global, `icon(name)`, returning an inline SVG string. Two registries:

- `ICONS` — the local SVG set used for hero deco, feature cards, CTAs.
- `SALLA_MAP` — translates `sicon-*` class names from `twilight.json` to keys in `ICONS`. When you add a theme section whose `icon` is a new `sicon-*`, extend `SALLA_MAP` instead of inventing a new key.

## The `sarie/` subfolder is a different project

`sarie/` is a cloned Salla Twilight theme (Theme Raed base, pnpm + webpack). It is **not** part of the catalog site — it's the source repo for one of the themes listed in `data.js`. Treat it as an isolated workspace:

- Use `pnpm` only (it has a `preinstall: only-allow pnpm` guard).
- `pnpm watch` — webpack dev build, rebuilds on change.
- `pnpm production` (alias `pnpm prod`) — production build.
- Never run root-level edits inside `sarie/`, and never run `sarie/`'s build from the project root.

If the user asks to update sarie's catalog entry from its source, read `sarie/twilight.json` and apply the schema mapping above to `data.js` — don't touch sarie's source files for catalog work.

## Conventions worth keeping

- Arabic-first, RTL. `<html lang="ar" dir="rtl">` is set on both pages; visible counts use Arabic-Indic numerals via the `arabicNumber()` helper in `main.js`/`theme.js`.
- Vanilla JS, IIFE-wrapped, no modules, no framework. Don't introduce a bundler or framework at the root level without an explicit ask.
- Honour `prefers-reduced-motion` — `main.js` already skips the staggered card reveal when set; preserve that pattern in any new animation.
- Fonts are loaded from Google Fonts (Cairo + Tajawal) via the document `<head>`. Keep both pages' `<head>` blocks in sync when adding global assets.
