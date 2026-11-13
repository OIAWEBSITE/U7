# U7+ Student Challenge 2027

A complete, responsive English-language event website for the **U7+ Alliance Student Challenge 2027**, hosted by **Universidad de los Andes** in Bogotá, Colombia.

## Preview locally

Requirements: Node.js 20+ (Node 22 recommended).

```bash
npm install
npm run dev
```

Open the local address shown by Vite (usually http://localhost:5173).

## Publish to GitHub Pages

1. Create a **public** GitHub repository, recommended name: `u7-student-challenge-2027`.
2. Upload **the contents of this folder** to the root of the repository, including `.github/workflows/deploy.yml`. Do not upload the enclosing folder as a subfolder.
3. Commit and push the code to the `main` branch.
4. In GitHub, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
5. Go to **Actions** to monitor deployment. The deployment runs when changes are pushed to `main` (you may need to trigger the workflow manually once if Pages was enabled after the initial push).
6. The resulting URL will typically be `https://YOUR_USERNAME.github.io/u7-student-challenge-2027/`.

The Vite base path uses `./`, so the website works under a repository subpath or a custom domain without code changes.

## What can be edited

- **Agenda, milestones, thematic tracks, and evaluation criteria:** `src/data.js`.
- **Site wording / sections / UI:** `src/main.jsx`.
- **Colors, layout, responsive styles:** `src/style.css`.
- **Metadata, favicon, page title:** `index.html` and `public/favicon.svg`.

### Editorial notes before publishing

Source document: `The U7+ 2027 challenge 1.docx`, November 2026.

- Venue columns/rooms are **intentionally not published**, because every venue is TBC.
- The main event is described as **May 24–28, 2027**, and the agenda includes **departure May 29**. The site describes the experience as **May 24–29**, specifying departure on May 29.
- In the provided agenda, Tuesday mentoring has `13.00–00.00`; its ending is **not treated as midnight**. The site shows `13:00 · End time TBC`.
- Thursday's `14.00–00.00` free time is shown as **14:00 onwards**, without implying midnight.
- The document lists Wednesday mentoring `08:00–13:00` and lunch `12:00–12:50` concurrently. Both entries are retained as provided, pending review.
- The university expression-of-interest deadline reads **December 2026, 23:59 GMT** without an exact day. The site preserves the uncertainty.
- The document mentions an application form but does not include a URL. No fake application link is shown.
- No official U7+ or Uniandes brand assets were supplied; the header uses **typographic identification**, not an official logo. Institutional branding should be reviewed before publication.

## Stack

React 18, Vite 6, lucide-react, custom CSS, GitHub Actions + GitHub Pages. No database or backend necessary. Fonts load from Google Fonts; if these are blocked, system fonts take over automatically.

## Content

All public text is in English and based on the provided document, lightly edited for concise web presentation. The website includes six trustworthy-AI pillars, three tracks, milestones, interactive daily agenda, evaluation criteria, project summary requirements, covered and participant expenses, FAQ and contact links.
