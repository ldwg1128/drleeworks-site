import type { Lang } from '../i18n/ui';

export const DEFAULT_AUTHOR = 'DrLeeWorks';
export const AUTHORS = [DEFAULT_AUTHOR] as const;

export const POST_CATEGORIES = {
  ko: ['컴퓨팅', '공학', '노트', '추천', '인터렉티브'],
  en: ['Computing', 'Engineering', 'Notes', 'Recommendations', 'Interactive']
} as const;

export const BOARD_CATEGORIES = {
  computing: { ko: '컴퓨팅', en: 'Computing' },
  engineering: { ko: '공학', en: 'Engineering' },
  notes: { ko: '노트', en: 'Notes' },
  recommendations: { ko: '추천', en: 'Recommendations' },
  interactive: { ko: '인터렉티브', en: 'Interactive' }
} as const;

export type PostCategory = (typeof POST_CATEGORIES)[Lang][number];

export const categoryPath = (lang: Lang, category: string) => {
  const paths: Record<Lang, Record<string, string>> = {
    ko: { 컴퓨팅: '/computing', 공학: '/engineering', 노트: '/notes', 추천: '/recommendations', 인터렉티브: '/interactive' },
    en: { Computing: '/computing', Engineering: '/engineering', Notes: '/notes', Recommendations: '/recommendations', Interactive: '/interactive' }
  };
  const result = paths[lang][category];
  if (!result) throw new Error(`Unknown category for ${lang}: ${category}`);
  return result;
};
