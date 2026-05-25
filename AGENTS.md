# AGENTS.md

This repository is for migrating `torresquintero.edu.mx` from Wix to a self-managed static site.

## Purpose

The repo should support:

- preserving the current public site content;
- rebuilding the site as a modern static website;
- publishing on GitHub Pages with a custom domain;
- replacing the Wix contact form with simpler contact actions;
- evolving later toward lightweight dynamic content.

## Current Phase

The current phase is migration planning and static-site rebuild.

The immediate goal is:

- capture the current Wix content;
- define the target information architecture;
- rebuild the public site as a clean static site;
- deploy it on GitHub Pages.

## Product Direction

The site should be:

- static-first;
- fast and easy to host;
- easy to maintain in Git;
- readable on mobile and desktop;
- simple for future agents to extend safely.

The site should not depend on Wix after migration.

## Initial Content Model

Version 1 should treat the website as the official source for:

- school overview;
- admissions information;
- facilities;
- educational model;
- gallery;
- news and updates;
- contact information.

Instagram should be treated as a secondary channel, not the core content system.

## Contact Model

Do not rebuild the Wix contact form as the primary contact path in v1.

Prefer:

- WhatsApp link;
- email link;
- map/location link.

If a form is added later, it should be justified by a concrete operational need.

## Documentation Rule

Before major implementation work, read:

1. `README.md`
2. `docs/ARCHITECTURE.md`
3. `docs/ROADMAP.md`
4. `docs/BACKLOG.md`
5. `snapshot/README.md`

## Working Rules

- Keep changes scoped to the current migration phase.
- Prefer documentation and content structure before framework churn.
- Preserve the captured snapshot as a migration source archive.
- Do not edit files under `snapshot/` unless refreshing the capture intentionally.
- Prefer static-site-compatible solutions over backend-dependent features.
- Treat WhatsApp, email, and map links as stable v1 contact features.
- Treat Instagram integration as optional enhancement work after the static site launches.

## Expected Structure

- `snapshot/`: captured Wix source content and assets
- `docs/`: architecture, roadmap, and backlog
- future app files: static-site source, content files, and deployment config

## Task Intake Template

Use this for future work:

```md
## Task

- Requirement:
- Expected files to change:
  - `path/to/file`
- Tests to run:
  - `npm run build`
- Acceptance criteria:
  - [ ] Requirement is implemented
  - [ ] Build passes or failure is explained
  - [ ] No unrelated files changed
- PR summary:
  - What changed:
  - Why this approach:
  - Evidence:
```
