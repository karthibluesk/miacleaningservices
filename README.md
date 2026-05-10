# Mia’s Cleaning Service Website

A production-ready, GitHub-ready Next.js website for **Mia’s Cleaning Service** at `miacleaningservice.com`.

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Framer Motion
- Markdown blog posts
- JSON-powered services, pricing, FAQs, testimonials, and gallery content

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run typecheck
npm run build
npm run start
```

## Editing site content

- Services: `data/services.json`
- Pricing: `data/pricing.json`
- FAQs: `data/faqs.json`
- Testimonials: `data/testimonials.json`
- Gallery: `data/gallery.json`
- Blog posts: `content/blog/*.md`

## Add a blog post

Create a new Markdown file in `content/blog`:

```md
---
title: "Your Post Title"
description: "Short SEO description."
date: "2026-05-09"
category: "Cleaning Tips"
featured: false
image: "/images/blog/example.svg"
---

Your article content here.
```

## Deploy to Vercel

1. Push this folder to GitHub.
2. Sign in to Vercel.
3. Import the GitHub repository.
4. Add environment variables from `.env.example`.
5. Deploy.

## Deploy to Netlify

1. Push to GitHub.
2. Create a new Netlify site from Git.
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add the Next.js runtime plugin if prompted.
6. Add environment variables from `.env.example`.

## ZIP packaging

```bash
cd ..
zip -r mias-cleaning-service.zip mias-cleaning-service -x "*/node_modules/*" "*/.next/*"
```


## Logo and brand assets

The pink Mia’s Cleaning Service logo has been added here:

```txt
/public/images/mias-cleaning-service-logo.png
/public/images/mias-cleaning-service-logo.webp
```

The header, footer, homepage hero, Open Graph image, and favicon metadata now reference the logo. The design system also includes pink brand colors and a Women Owned & Operated badge.
