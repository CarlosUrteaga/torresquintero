# Torres Quintero Site Migration

This repository is for rebuilding `torresquintero.edu.mx` as a self-managed static site.

## Goals

- move off Wix;
- keep the current public content;
- publish a clean modern site on GitHub Pages;
- use a custom domain;
- replace the contact form with simpler contact actions such as WhatsApp.

## Current State

- The original Wix site is preserved under `snapshot/`.
- The replacement site is implemented with Astro.
- Content and photography come only from the Torres Quintero snapshot.
- GitHub Pages deployment and the custom domain are configured.

## Stack

- Astro static output
- Markdown content collections for news
- GitHub Pages deployment through GitHub Actions
- Custom domain: `torresquintero.edu.mx`

## Local Development

```sh
npm install
npm run dev
```

Validation:

```sh
npm run check
npm run build
```

## Content Policy

The site uses only Torres Quintero content and images. See
`docs/CONTENT_SOURCES.md` for the migration mapping and editorial rules.

## Read First

1. `AGENTS.md`
2. `docs/ARCHITECTURE.md`
3. `docs/ROADMAP.md`
4. `docs/BACKLOG.md`
5. `snapshot/README.md`
