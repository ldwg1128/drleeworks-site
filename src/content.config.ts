import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { AUTHORS, POST_CATEGORIES } from './config/content';

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
    assetFilename: z.string(), assetSize: z.number().optional(), distribution: z.string(),
    sha256: z.string(), publisher: z.string(), certificateSubject: z.string(), certificateThumbprint: z.string(), signature: localized,
    changelog: localized, knownIssues: localized.optional(), bugReportUrl: z.string().url(), license: z.string().optional()
  })
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts', generateId: ({ entry }) => entry }),
  schema: ({ image }) => z.object({
    title: z.string(), slug: z.string(), lang: z.enum(['ko', 'en']), translationKey: z.string(),
    published: z.coerce.date(), updated: z.coerce.date().optional(), category: z.string(), tags: z.array(z.string()),
    author: z.enum(AUTHORS), summary: z.string(), featuredImage: image().optional(),
    recommended: z.boolean().default(false), sample: z.boolean().default(false), draft: z.boolean().default(false)
  }).superRefine((post, ctx) => {
    const allowed = POST_CATEGORIES[post.lang] as readonly string[];
    if (!allowed.includes(post.category)) ctx.addIssue({
      code: 'custom', path: ['category'],
      message: `${post.lang} 게시물 category는 ${allowed.join(', ')} 중 하나여야 합니다.`
    });
    if (post.updated && post.updated < post.published) ctx.addIssue({
      code: 'custom', path: ['updated'], message: 'updated는 published보다 빠를 수 없습니다.'
    });
  })
});


export const collections = { software, posts };
