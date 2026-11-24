// Usage: npm run new -- "Post title"
import { writeFileSync, existsSync } from 'node:fs';

const title = process.argv.slice(2).join(' ') || 'Untitled';
const date = new Date().toISOString().slice(0, 10);
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const file = `src/content/posts/${date}-${slug}.md`;

if (existsSync(file)) { console.error(`${file} already exists`); process.exit(1); }

writeFileSync(file, `---
title: "${title.replace(/"/g, '\\"')}"
date: ${date}
summary: ""
tags: []
---

## What I did

## Resources consulted

## Feedback received

## Technologies investigated / benchmarks

## Difficulties / where I'm stuck

## Next steps
`);
console.log(`Created ${file}`);
