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
    posts/{ko,en}/      <section>/<post-folder>/index.md (or index.mdx) and images
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

On this Windows workspace, run `.\dev.cmd` in PowerShell to start the site.
The launcher uses the project-local Node.js installation in `.cache` when available.
If PowerShell blocks `npm.ps1`, use `npm.cmd` instead of `npm`.

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

## Adding a post

Copy `templates/post.md` to `src/content/posts/<ko|en>/<computing|engineering|records>/<post-folder>/index.md`. Match `lang` and `category` to the folders and set `draft: false` when ready. Public URLs use the explicit frontmatter `slug`, not the filename or folder name. An article does not require a translation. For paired translations, give both files the same `translationKey`; the article page will link the pair.

Markdown supports headings, tables, fenced code, links, and math using `$...$` or `$$...$$`. MDX files may use the `.mdx` extension.

## Article images

Keep post images beside the article:

```text
src/content/posts/ko/computing/post-name/
  index.md
  figure-01.png
```

Reference `![Description](./figure-01.png)` in Markdown. Astro processes local images during the build, and Obsidian can display the same standard Markdown. Existing `/images/...` references remain supported.

For a cover/card image, use `featuredImage: ./figure-01.png`. See [the content guide](docs/CONTENT_GUIDE.md#obsidian) for Obsidian attachment settings.

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
