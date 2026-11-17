# KNGS CPD & How-to Hub

Public-facing, browser-based teaching and digital skills guides. The repository is **public**, so no confidential information, internal operational detail, real pupil data or downloadable resource files should be committed here.

**Website (when GitHub Pages is enabled):** https://kingsnortongirls.github.io/cpd/

## What's in the hub

13 guides across six subject areas:

| Category | Guides |
| --- | --- |
| AI in education | Using AI Safely in Education |
| AI and digital practice | AI Lesson Design Lab |
| Teaching and learning | Adaptive Teaching and Scaffolding; Retrieval Practice and Metacognition |
| Assessment and feedback | Creating Effective Assessment Questions; Feedback That Moves Learning Forward |
| Accessibility and inclusion | Making Teaching Resources Accessible |
| Microsoft 365 | Microsoft Teams for Teaching; Microsoft Forms: Beyond Basic Surveys; Power Automate for Beginners; SharePoint and OneDrive Explained; Excel for Teachers |
| Digital safety | Cyber Security Essentials |

Each new guide contains an overview, five steps, before-and-after example, practical activity, independent checklist, direct links to official guidance and relevant related guides.

Interactive activities include: AI privacy decision practice, a diagnostic multiple-choice question builder, fictional Forms branching, a simple Power Automate workflow model, a cyber security scenario and an Excel calculator. These run entirely in the browser and **do not transmit or store typed responses**.

The existing AI Lesson Design Lab remains available with its CLASS prompt builder, online reference and browser walkthrough.

## Add future guides

1. Check that the subject and all text, example names and links can be shared publicly. Use invented examples only, especially in screenshots.
2. Add a complete new guide object to `guides-data-teaching.js` or `guides-data-digital.js` following the existing schema.
3. Give each guide a unique ID, title, category, level, reading/activity time, date reviewed, objective, five instructional steps, example, practice, checklist, and direct source pages.
4. If a new kind of interactive tool is needed, add a safe client-side handler to `guide.html`. No analytics or remote data submission.
5. Test the guide via `guide.html?id=your-guide-id`, then search and filter on the homepage.
6. Check mobile layout, accuracy and external source links; repeat the manual privacy review.

For bespoke workshop resources, create a standalone page under `guides/` and register it in `guides.js`.

## Repository layout

- `index.html`: searchable guide library with category and difficulty filters.
- `guide.html`: shared guide reader and safe interactive activities.
- `guides.js`: earlier bespoke standalone guides.
- `guides-data-teaching.js`: teaching, assessment, inclusion and AI safety guides.
- `guides-data-digital.js`: Microsoft 365, Excel and cyber security guides.
- `styles.css`: shared visual theme and accessibility styles.
- `scripts/check-public-content.mjs`: basic sensitive-content and file-type check.
- `.github/workflows/pages.yml`: runs the content check before publishing through GitHub Pages.

## Public publication rules

- Do **not** upload PowerPoint, PDF, Word, spreadsheet, ZIP or other downloadable asset files.
- Do **not** commit names, contact details, email addresses, passwords, login screenshots, confidential policies, real pupil data, safeguarding material, internal links or private document URLs.
- Do not add user input collection, tracking, sign-in, cloud storage, or integration with school data systems.
- Use only fictional scenarios and public, official product instructions.
- Keep the institution's own policies and training approval arrangements out of the public pages. Tell staff to check their current local procedures instead.

The automatic content check rejects common email addresses, credential patterns, external-branding references, private links and common downloadable file formats, but it **cannot guarantee that information is anonymous or safe to publish**. Human review remains essential.

## Publishing

Changes to `main` trigger GitHub Actions. The content audit must pass before the Pages publishing job runs. Pull requests run the audit without deploying. If publishing fails, inspect the Actions tab and Settings → Pages.

This project provides general educational help, not an authenticated staff intranet.
