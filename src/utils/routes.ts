import type { Lang } from '../i18n/ui';
export const localizedPath = (lang: Lang, path = '') => `/${lang}${path === '/' ? '' : path}`;
export const switchLanguagePath = (pathname: string, lang: Lang) => pathname.replace(/^\/(ko|en)(?=\/|$)/, `/${lang}`);
export const formatDate = (date: Date, lang: Lang) => new Intl.DateTimeFormat(lang === 'ko' ? 'ko-KR' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
