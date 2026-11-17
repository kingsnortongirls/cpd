# KNGS CPD & How-to Guide Hub

A public, searchable library of professional development, instructional guides and non-confidential teaching resources.

**Live site (when Pages is enabled):** https://kingsnortongirls.github.io/cpd/

## Current guide

**AI Lesson Design Lab: Planning Smarter, Not Harder**

- Full guide: `guides/ai-lesson-design-lab.html`
- Interactive CLASS prompt builder (runs locally in the user's browser)
- Online quick-reference page: `guides/ai-lesson-design-lab-handout.html`
- Browser-based presentation walkthrough: `guides/ai-lesson-design-lab-slides.html`

This content is based on the AI Lesson Design Lab presentation and one-page handout provided for the CPD Hub. The web walkthrough is a **condensed adaptation**, not an exact 56-slide copy.

**Important:** Do not publish presentation files or other downloadable assets. Keep any sign-in details, passwords and credentials out of this public repository and all its pages.

## Adding a new guide

1. Check that the proposed resource can be shared publicly. Remove passwords, pupil-identifiable content, staff-only details, internal links and any other confidential information, including hidden speaker notes and file metadata.
2. Create a page inside `guides/` with the shared `../styles.css` stylesheet.
3. Add its details (id, title, subtitle, category, description, updated, duration, tags and URLs) to `guides.js`. The homepage search and category filter update automatically.
4. Where useful, include an online quick-reference page and a presentation companion.
5. Test from a phone as well as a school desktop. Check all external links.

## Site structure

- `index.html`: homepage with a search and category filter.
- `guides.js`: expandable guide directory.
- `styles.css`: KNGS visual theme, accessible layouts, print styles.
- `guides/`: individual resources.
- `.github/workflows/pages.yml`: GitHub Pages publishing on push to `main`.

## Publishing

The included GitHub Actions workflow attempts to enable Pages and deploy automatically. If the site is not accessible, check **Settings → Pages** and **Actions**.

This is a public GitHub Pages site, **not an authenticated intranet**. Never assume unpublished drafts or staff-only data are secure in a public repository.

## About the first guide

The CLASS framework stands for **Context, Learning, Activity, Support, Success**. The guide covers a better brief for photosynthesis, improving an existing First World War activity, creating hinge questions and exit tickets for negative numbers, a copyable prompt bank, and checks for professional judgement, pupil privacy and accuracy.

The site does not collect prompt-builder input or send it to a backend.

This hub provides **browser-based guides only**, with no downloadable PowerPoint, PDF or ZIP assets or download buttons.
