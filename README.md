# Ravi Tharuma

Personal site for Ravi Tharuma. The pages are a static Astro build. Copy lives in `src/data`. A matching Sanity schema lives in `sanity/schemaTypes` and is not called during the build.

## Run

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Content

- `src/data/homepage.json` is the homepage.
- `src/data/pages.json` is Practice, Work, Method, About, Impressum, and Privacy.
- `src/data/site.json` is the header, footer, and contact links.

There is no Sanity project id, dataset, or token in this repository. Leave those unset until a project exists. See `.env.example`.
