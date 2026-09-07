import type { Lang } from '../i18n/ui';

export const DEFAULT_AUTHOR = 'DrLeeWorks';
export const AUTHORS = [DEFAULT_AUTHOR] as const;

export const POST_CATEGORIES = {
  ko: ['컴퓨팅', '공학', '기록'],
  en: ['Computing', 'Engineering', 'Notes']
} as const;

export const BOARD_CATEGORIES = {
  computing: { ko: '컴퓨팅', en: 'Computing' },
  engineering: { ko: '공학', en: 'Engineering' },
  notes: { ko: '기록', en: 'Notes' }
} as const;

export type PostCategory = (typeof POST_CATEGORIES)[Lang][number];

export const categoryPath = (lang: Lang, category: string) => {
  const paths: Record<Lang, Record<string, string>> = {
    ko: { 컴퓨팅: '/computing', 공학: '/engineering', 기록: '/notes' },
    en: { Computing: '/computing', Engineering: '/engineering', Notes: '/notes' }
  };
  const result = paths[lang][category];
  if (!result) throw new Error(`Unknown category for ${lang}: ${category}`);
  return result;
};
