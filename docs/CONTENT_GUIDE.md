# Content Guide

## New blog article

1. Copy `templates/blog-post.md` to `src/content/posts/ko/<slug>.md` or `src/content/posts/en/<slug>.md`.
2. Use a short lowercase ASCII slug with hyphens. Keep `slug` and the public URL stable after publication.
3. Fill the frontmatter, write the article, and keep `draft: true` while editing.
4. Put public inline images in `public/images/blog/YYYY/<slug>/`; number figures predictably (`figure-01.webp`).
5. Add descriptive alt text, cite original sources, and do not commit unlicensed images.
6. Run `npm run check` and `npm run build`, then set `draft: false`.

Posts can exist in only one language. If you translate one, create a separate file in the other language and give both the same `translationKey`.

## New software page or release

Copy `templates/software-page.md` to `src/content/software/<slug>.md`. Release binaries must stay in GitHub Releases. For every release, verify and update:

- semantic version and release date
- exact download asset URL
- supported systems and requirements
- SHA-256 computed from the published file
- digital-signature publisher and certificate information
- changelog, known issues, bug-report URL, and license

Never publish a checksum copied from an unverified intermediate build.

## Engineering notes

Add language-specific Markdown under `src/content/engineering/ko/` or `en/`. These records use the same prose rendering as blog articles and can contain tables, code, equations, and images.

## Images

- Prefer WebP or AVIF for photos/screenshots and SVG for simple diagrams you own.
- Preserve source figures outside `public/` if they are not web-ready.
- Avoid spaces and non-ASCII characters in filenames.
- Use a stable absolute path beginning with `/images/`.
- Do not embed images as base64.

## Editorial checklist

- Title and summary accurately describe the page.
- Dates, units, equations, code, and external links are checked.
- Heading levels are sequential and image alt text is meaningful.
- Korean and English UI routes both build.
- No secrets, private data, local file paths, or unreleased binaries are committed.

## Long-term publishing fields

- `recommended: true` selects a published post for the home recommendation area. Recommendations are still ordered by `published` and limited to two per language.
- `sample: true` identifies removable demonstration content; it does not hide the post.
- `featuredImage` is rendered in cards, article headers, and social metadata.
- `updated` is displayed on the article page and must not be earlier than `published`.
- Authors and localized categories are centralized in `src/config/content.ts`.

Create a draft with:

```bash
npm run post:new -- ko engineering my-post-slug "게시물 제목"
```

Valid sections are `computing`, `engineering`, and `notes`. The command creates a non-overwriting `draft: true` file in the matching language/category folder.

## YouTube

Use an `.mdx` article, import `YouTube` from `src/components/YouTube.astro`, and render `<YouTube id="VIDEO_ID" title="Accessible title" />`. It uses YouTube's privacy-enhanced domain and a responsive 16:9 layout.

`npm run content:check` rejects language-folder mismatches, malformed or duplicate slugs, and duplicate translation keys within one language. Both `npm run check` and `npm run build` include this validation.

Sample board posts remain isolated under `src/content/posts/ko/board-samples/` and carry `sample: true` for easy removal.
