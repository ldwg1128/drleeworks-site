import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const localized = z.object({ ko: z.string(), en: z.string() });

const software = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/software' }),
  schema: z.object({
    name: z.string(), slug: z.string(), description: localized,
    version: z.string(), releaseDate: z.coerce.date(), operatingSystems: z.array(z.string()),
    icon: z.string(), screenshots: z.array(z.string()).default([]),
    features: z.object({ ko: z.array(z.string()), en: z.array(z.string()) }),
    requirements: localized, installation: localized,
    downloadUrl: z.string().url(), repositoryUrl: z.string().url(), releasesUrl: z.string().url(),
    sha256: z.string(), publisher: z.string(), signature: localized,
    changelog: localized, knownIssues: localized, bugReportUrl: z.string().url(), license: z.string()
  })
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: ({ image }) => z.object({
    title: z.string(), slug: z.string(), lang: z.enum(['ko', 'en']), translationKey: z.string().optional(),
    published: z.coerce.date(), updated: z.coerce.date().optional(), category: z.string(), tags: z.array(z.string()),
    author: z.string(), summary: z.string(), featuredImage: image().optional(), draft: z.boolean().default(false)
  })
});

const engineering = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/engineering', generateId: ({ entry }) => entry }),
  schema: z.object({ title: z.string(), slug: z.string(), lang: z.enum(['ko', 'en']), summary: z.string(), order: z.number() })
});

export const collections = { software, posts, engineering };
