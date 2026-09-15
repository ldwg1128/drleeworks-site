import { createMarkdownProcessor, type MarkdownRenderer } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const MARKER_LINE = /^\s*<!--\s*interactive:([a-z0-9]+(?:-[a-z0-9]+)*)\s*-->\s*$/;
const FENCE_LINE = /^\s*(`{3,}|~{3,})/;

export type MarkdownSegment = { type: 'markdown'; text: string } | { type: 'marker'; id: string };

// Splits a plain-Markdown post body into alternating markdown/marker segments so a
// `<!-- interactive:ID -->` line can be replaced with a real Astro component at that
// exact position, instead of a client-side DOM swap. Lines inside fenced code blocks
// are never treated as markers.
export function splitByInteractiveMarkers(body?: string): MarkdownSegment[] {
  if (!body) return [{ type: 'markdown', text: '' }];
  const segments: MarkdownSegment[] = [];
  let buffer: string[] = [];
  let fence: string | null = null;
  const flush = () => { segments.push({ type: 'markdown', text: buffer.join('\n') }); buffer = []; };

  for (const line of body.split(/\r?\n/)) {
    const fenceMatch = line.match(FENCE_LINE);
    if (fenceMatch) {
      const delimiter = fenceMatch[1];
      if (!fence) fence = delimiter;
      else if (delimiter[0] === fence[0] && delimiter.length >= fence.length) fence = null;
      buffer.push(line);
      continue;
    }
    if (!fence) {
      const markerMatch = line.match(MARKER_LINE);
      if (markerMatch) {
        flush();
        segments.push({ type: 'marker', id: markerMatch[1] });
        continue;
      }
    }
    buffer.push(line);
  }
  flush();
  return segments;
}

export function hasInteractiveMarkers(body?: string): boolean {
  return splitByInteractiveMarkers(body).some(segment => segment.type === 'marker');
}

// Cached across the whole build/dev process (not per page) since creating a processor
// spins up the same syntax highlighter etc. used by the rest of the site.
let sharedProcessor: Promise<MarkdownRenderer> | null = null;
export function getSharedMarkdownProcessor(): Promise<MarkdownRenderer> {
  if (!sharedProcessor) {
    // Mirrors astro.config.mjs `markdown` options so segments rendered outside the normal
    // content-collection pipeline (KaTeX, tables, etc.) look identical to the rest of the site.
    sharedProcessor = createMarkdownProcessor({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] });
  }
  return sharedProcessor;
}

// `getSharedMarkdownProcessor` bypasses `astro:content`'s `render(entry)`, so Astro's
// built-in handling of relative `![](./figure.ext)` paths never runs for these segments.
// This resolves the same `./figure.ext` syntax by hand so post authors can use one
// convention (image beside `index.md`) regardless of whether the post uses interactive
// markers. Vite's glob is watched in dev, so newly added images are picked up automatically.
const LOCAL_IMAGE_PATTERN = /(!\[[^\]]*\]\()(\.\/[^)\s]+)(\))/g;
const postImageUrls = import.meta.glob('/src/content/posts/**/*.{png,jpg,jpeg,webp,avif,gif,svg}', {
  eager: true,
  query: '?url',
  import: 'default'
}) as Record<string, string>;

export function resolveLocalImagePaths(markdown: string, postDirectory: string): string {
  return markdown.replace(LOCAL_IMAGE_PATTERN, (match, prefix: string, relativePath: string, suffix: string) => {
    const assetKey = `/src/content/posts/${postDirectory}/${relativePath.slice(2)}`;
    const resolved = postImageUrls[assetKey];
    if (!resolved) {
      console.warn(`[interactive-markers] Local image not found beside "${postDirectory}/index.md": ${relativePath}`);
      return match;
    }
    return `${prefix}${resolved}${suffix}`;
  });
}

