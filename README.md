# Backseat

A VR experience where you ride in the back of a taxi through a minimalist world that transforms with the music you choose. Devine passion project, 2026.

This repo holds the development diary (built with [Astro](https://astro.build)), published at https://janrymarski.github.io/Backseat/

## Writing a diary post

```sh
npm install
npm run new -- "Day 2: Audio analysis research"   # creates a post from the template
npm run dev                                        # preview at http://localhost:4321/Backseat/
```

Posts live in `src/content/posts/`. The research question page is `src/pages/research.astro`.
Pushing to `main` rebuilds and deploys the site through GitHub Actions.

## Style

Dreamcore look matching the pitch deck: Libre Caslon Display headings, Hanken Grotesk body, small uppercase captions, Ø-style numbering and blurred moodboard photos (with a shifted "motion ghost") as full-bleed backgrounds in `public/bg/`. A post can pick its background with `bg: dusk | monolith | fog | station` in its frontmatter; otherwise posts cycle through them.
