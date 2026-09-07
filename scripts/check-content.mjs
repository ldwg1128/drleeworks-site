import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('src/content/posts');
const files = [];
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) await walk(target);
    else if (/\.mdx?$/.test(entry.name)) files.push(target);
  }
}
await walk(root);

const seen = new Map();
const translations = new Map();
const errors = [];
for (const file of files) {
  const source = await readFile(file, 'utf8');
  const frontmatter = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/m)?.[1] ?? '';
  const value = key => frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1]?.trim();
  const lang = value('lang');
  const slug = value('slug');
  const translationKey = value('translationKey');
  const relative = path.relative(root, file).replaceAll('\\', '/');
  const folderLang = relative.split('/')[0];
  if (!['ko', 'en'].includes(folderLang)) errors.push(`${relative}: 최상위 폴더는 ko 또는 en이어야 합니다.`);
  if (lang !== folderLang) errors.push(`${relative}: lang(${lang ?? '누락'})과 폴더(${folderLang})가 다릅니다.`);
  if (!slug) errors.push(`${relative}: slug가 없습니다.`);
  else if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) errors.push(`${relative}: slug는 영문 소문자, 숫자, 하이픈만 사용할 수 있습니다.`);
  else {
    const key = `${lang}/${slug}`;
    if (seen.has(key)) errors.push(`${relative}: ${seen.get(key)}와 slug가 중복됩니다 (${key}).`);
    else seen.set(key, relative);
  }
  if (translationKey) {
    const translationId = `${lang}/${translationKey}`;
    if (translations.has(translationId)) errors.push(`${relative}: ${translations.get(translationId)}와 같은 언어에서 translationKey가 중복됩니다.`);
    else translations.set(translationId, relative);
  }
}
if (errors.length) {
  console.error(`콘텐츠 검사 실패 (${errors.length}건)\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
console.log(`콘텐츠 검사 완료: 게시물 ${files.length}개, 언어/slug/번역 키 이상 없음.`);
