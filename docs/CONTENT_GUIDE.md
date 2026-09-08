# Content Guide

## New article

1. Copy `templates/post.md` to `src/content/posts/<ko|en>/<computing|engineering|records>/<post-folder>/index.md`.
2. Use a short lowercase ASCII slug with hyphens. Keep `slug` and the public URL stable after publication.
3. Fill the frontmatter, write the article, and keep `draft: true` while editing.
4. Put inline images beside `index.md` and use `![Description](./figure-01.webp)`.
5. Add descriptive alt text, cite original sources, and do not commit unlicensed images.
6. Run `npm run check` and `npm run build`, then set `draft: false`.

Posts can exist in only one language. If you translate one, create a separate file in the other language and give both the same `translationKey`.

Each post folder contains exactly one `index.md` (or `index.mdx`) plus its assets.
The frontmatter `slug` determines the public URL, independently of the folder name.
Never change a published `slug` just because you rename its folder. `index` is not added to URLs.
The `records` folder continues to publish under `/ko/notes/` or `/en/notes/`.
Empty category folders may keep `.gitkeep`. Images are not collection entries.

```text
posts/ko/computing/my-post/
├─ index.md
└─ screenshot.png
```

## Obsidian

Open `src/content` as the vault. In **Settings → Files and links**:

- Turn **Use Wikilinks** off to insert standard Markdown instead of `![[image.png]]`.
- Set **New link format** to **Relative path to file**.
- Set **Default location for new attachments** to **Same folder as current file**.

Open the post's `index.md`, then paste or drag an image into it. Keep the image beside
the article and use `![설명](./image.png)` (a relative `image.png` also works).
Astro processes these local Markdown images during the build; no copy in `public` is needed.
For a card/cover image, use `featuredImage: ./cover.webp` in frontmatter.
Keep Markdown links up to date if you move images between folders.
Obsidian configuration is local to each vault; an existing `.obsidian` folder under
`posts/ko` applies only when that directory is opened as the vault.

References: [Astro images](https://docs.astro.build/en/guides/images/#images-in-markdown-files),
[Obsidian attachments](https://help.obsidian.md/attachments).

## New software page or release

Copy `templates/software-page.md` to `src/content/software/<lang>/<slug>/index.md` and keep one language per folder. Put any page-specific images beside `index.md` and use relative paths. Give translated documents the same `translationKey`. Release binaries must stay in GitHub Releases. For every release, verify and update:

- semantic version and release date
- exact download asset URL
- supported systems and requirements
- SHA-256 computed from the published file
- digital-signature publisher and certificate information
- changelog, known issues, bug-report URL, and license

Never publish a checksum copied from an unverified intermediate build.

## Images

- Prefer WebP or AVIF for photos/screenshots and SVG for simple diagrams you own.
- Preserve source figures outside `public/` if they are not web-ready.
- Avoid spaces and non-ASCII characters in filenames.
- For post images, use `./filename.webp` beside `index.md`; existing `/images/` URLs still work.
- Do not embed images as base64.

## Editorial checklist

- Title and summary accurately describe the page.
- Dates, units, equations, code, and external links are checked.
- Heading levels are sequential and image alt text is meaningful.
- Korean and English UI routes both build.
- No secrets, private data, local file paths, or unreleased binaries are committed.

## Long-term publishing fields

- `recommended: true` selects a published post for the home recommendation area. Recommendations are still ordered by `published` and limited to two per language.
- `featuredImage` is rendered in cards, article headers, and social metadata.
- `updated` is displayed on the article page and must not be earlier than `published`.
- Authors and localized categories are centralized in `src/config/content.ts`.

Create a draft with:

```bash
npm run post:new -- ko engineering my-post-slug "게시물 제목"
```

Valid sections are `computing`, `engineering`, and `records`. The command creates
`<lang>/<section>/<slug>/index.md` with `draft: true` and refuses an existing post folder.

## YouTube

Use `index.mdx` instead of `index.md`, import `YouTube` from `../../../../../components/YouTube.astro`, and render `<YouTube id="VIDEO_ID" title="Accessible title" />`. It uses YouTube's privacy-enhanced domain and a responsive 16:9 layout. Astro renders MDX components; Obsidian's Markdown preview does not render them.

`npm run content:check` rejects incorrect post folder layouts, multiple index files in one folder, language-folder mismatches, malformed or duplicate slugs, and duplicate translation keys within one language. Hidden folders such as `.obsidian` and image assets are ignored. Both `npm run check` and `npm run build` include this validation.
