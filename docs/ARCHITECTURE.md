# Architecture

## Target Platform

The target platform is a static website deployed on GitHub Pages with a custom domain.

The first release should avoid runtime server dependencies.

## Core Principles

- static-first;
- content-first;
- mobile-friendly;
- easy to edit in Git;
- easy to deploy repeatedly.

## Implemented Layers

### 1. Source snapshot

The `snapshot/` directory is the preserved migration source.

It includes:

- raw Wix-rendered HTML;
- sitemap files;
- page inventories;
- downloaded media assets.

### 2. Site source

The Astro application contains:

- layout templates;
- page routes;
- shared components;
- static assets;
- content files.

Astro is the selected framework. It produces static HTML with no application
server requirement.

### 3. Content layer

The site should prefer file-based content such as:

- Markdown for news or announcements;
- JSON or YAML for shared site settings;
- local images for hero, gallery, and section assets.

This keeps publishing compatible with GitHub Pages.

## Information Architecture

- Home
- Colegio
- Modelo educativo
- Niveles
  - Preescolar
  - Primaria
- Vida escolar
- Instalaciones
- Galería
- Noticias
- Admisiones
- Contacto

## Contact Architecture

Version 1 should use:

- WhatsApp CTA;
- email link;
- Google Maps location link.

The contact form should not be treated as required for launch.

## Dynamic Evolution

The site should evolve in controlled steps:

1. static content launch;
2. file-managed updates;
3. optional build-time content automation;
4. optional Instagram-connected content.

If Instagram is added, prefer build-time ingestion over client-side widgets.

## Deployment

Deployment:

- GitHub Pages
- custom domain `torresquintero.edu.mx` using `CNAME`
- automated build and deploy from `main`

The build should produce plain static files with no application server requirement.
