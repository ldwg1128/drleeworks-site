# DrLeeWorks

DrLeeWorks is a bilingual personal software distribution and technical publishing site. It is built as a static Astro site for inexpensive hosting on Cloudflare Pages, while keeping software metadata and articles easy to maintain in Git.

## Why Astro

Astro produces static HTML by default, has first-class Markdown/MDX content collections, strong SEO fundamentals, and adds little client-side JavaScript. The project does not need a database or server for its initial release.

## Structure

```text
src/
  components/           Shared header, footer, and cards
  content/
    software/           Structured product records
    posts/{ko,en}/      Blog Markdown/MDX
    engineering/{ko,en}/ Engineering notes
  i18n/                 Central UI translations
  layouts/              Shared page and article shells
  pages/[lang]/         Korean and English static routes
  styles/               Global design system
  utils/                URLs and date formatting
public/images/          Stable public image paths
templates/              Copy-ready content templates
docs/                   Editorial documentation
```

## Local development

Requires Node.js 22.12 or newer (use a maintained Node LTS release).

```bash
npm install
npm run dev
```

Open the local URL printed by Astro. The root redirects to `/ko/`.

Quality and production commands:

```bash
npm run check
npm run build
npm run preview
```

The deployable static output is generated in `dist/`.

## Adding software

Copy `templates/software-page.md` to `src/content/software/<slug>.md`. Both localized descriptions live in the same record because release facts are shared. Complete every field; URLs must be full `https://` URLs. Product binaries belong on GitHub Releases, not in this repository.

To publish a release, change `version`, `releaseDate`, `downloadUrl`, `sha256`, signature/publisher details, and `changelog`. Link `downloadUrl` to the exact GitHub Release asset when available.

## Adding a blog post

Copy `templates/blog-post.md` into `src/content/posts/ko/` or `src/content/posts/en/`. Match `lang` to the folder and set `draft: false` when ready. An article does not require a translation. For paired translations, give both files the same `translationKey`; the article page will link the pair.

Markdown supports headings, tables, fenced code, links, and math using `$...$` or `$$...$$`. MDX files may use the `.mdx` extension.

## Article images

For straightforward, CDN-portable URLs, put images in:

```text
public/images/blog/YYYY/post-name/
```

Then reference `/images/blog/YYYY/post-name/figure-01.png` in Markdown. Use meaningful alt text and optimized WebP/AVIF where practical. Because paths are centralized and predictable, a future R2/CDN migration can use redirects or an asset-base helper without rewriting article prose.

For Astro-optimized featured images, place source images under `src/assets/blog/...` and use the relative `featuredImage` field shown in the template.

## Localization

All shared interface copy is in `src/i18n/ui.ts`. Route trees use `/ko/...` and `/en/...`, while layouts and page logic are shared. Product fields use `{ ko, en }`. Posts and engineering notes use independent language records, so untranslated content never creates a broken route. When a matching route exists the header language switch keeps the path; otherwise its static destination may return 404 for content-only pages, while article pages explicitly show and link translations only when present.

## Cloudflare Pages

1. Push this repository to GitHub.
2. In Cloudflare Pages, create a project from that repository.
3. Set framework preset to **Astro**, build command to `npm run build`, and output directory to `dist`.
4. Set the Pages build environment to Node.js 22.12 or newer.
5. Deploy and inspect both `/ko/` and `/en/`.

Before deployment, replace `https://example.com` in `astro.config.mjs` and `public/robots.txt` with the production origin. Astro will then generate canonical and sitemap URLs for that domain.

To attach a custom domain later, add it in the Cloudflare Pages project's **Custom domains** screen, update the two origin placeholders, and redeploy. No route redesign is required.

## Future integrations

- Add bug-report forms as a separate Cloudflare Worker/Pages Function under `functions/`; keep content static.
- Add search by generating a static index at build time.
- Add analytics in `BaseLayout.astro` after choosing a consent/privacy approach.
- Add ad and donation components at deliberate layout slots rather than embedding vendor code in content.
- Add RSS as an Astro endpoint and release/update feeds as generated static XML/JSON.
- Fetch GitHub release metadata during CI only when the release workflow is stable.
- Put comments behind a separate provider or service boundary.

## Replace before publishing

- `https://example.com` in site and robots configuration
- every `your-username` GitHub URL
- Shorts Player version, date, exact asset URL, SHA-256, requirements, license, publisher, and signature
- contact and privacy-policy placeholders
- favicon and product artwork
- sample/about wording that does not represent the final public identity

See [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md) for the short editorial workflow.

## Editorial tooling

Create a safe draft without copying files manually:

```bash
npm run post:new -- ko engineering my-post-slug "게시물 제목"
```

Use `recommended: true` for explicit home recommendations, `featuredImage` for card/article artwork, and the responsive `src/components/YouTube.astro` component from MDX. `npm run content:check` validates language folders, slugs, and translation keys before Astro checks and builds.
