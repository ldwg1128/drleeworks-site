import type { Lang } from '../i18n/ui';
import { ui } from '../i18n/ui';

export type SidebarItem = { path: string; label: string };
export type SidebarGroup = { items: SidebarItem[] };

export function getGlobalNavigation(lang: Lang) {
  const t = ui[lang];
  return [{ path: '', label: t.home }, { path: '/about', label: t.about }];
}

export function getSidebarNavigation(lang: Lang): SidebarGroup[] {
  const t = ui[lang];
  return [
    { items: [{ path: '/software', label: t.software }, { path: '/bug-reports', label: t.bugReports }] },
    { items: [{ path: '/computing', label: t.computing }, { path: '/engineering', label: t.engineering }, { path: '/notes', label: t.notes }] },
    { items: [{ path: '/support', label: t.supportNav }] }
  ];
}
