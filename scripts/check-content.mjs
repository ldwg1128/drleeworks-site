import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('src/content/posts');
const files = [];
const expectedFolders = {
  ko: { 컴퓨팅: 'computing', 공학: 'engineering', 기록: 'records' },
  en: { Computing: 'computing', Engineering: 'engineering', Notes: 'records' }
};
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) await walk(target);
    else if (/\.mdx?$/.test(entry.name)) files.push(target);
  }
}
await walk(root);

const seen = new Map();
const postFolders = new Map();
const translations = new Map();
const errors = [];
for (const file of files) {
  const source = await readFile(file, 'utf8');
  const frontmatter = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/m)?.[1] ?? '';
  const value = key => frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1]?.trim();
  const lang = value('lang');
  const category = value('category');
  const slug = value('slug');
  const translationKey = value('translationKey');
  const relative = path.relative(root, file).replaceAll('\\', '/');
  const parts = relative.split('/');
  const [folderLang, categoryFolder, postFolder, filename] = parts;
  if (parts.length !== 4 || !/^index\.mdx?$/.test(filename ?? '')) {
    errors.push(`${relative}: 게시물은 <언어>/<분류>/<게시물 폴더>/index.md 또는 index.mdx 구조여야 합니다.`);
  }
  // Folder names do not determine public slugs, but one folder must contain only one entry.
  const folderId = `${folderLang}/${categoryFolder}/${postFolder}`;
  if (postFolders.has(folderId)) errors.push(`${relative}: ${postFolders.get(folderId)}와 게시물 폴더가 중복됩니다. index.md와 index.mdx 중 하나만 사용하세요.`);
  else postFolders.set(folderId, relative);
  if (!['ko', 'en'].includes(folderLang)) errors.push(`${relative}: 최상위 폴더는 ko 또는 en이어야 합니다.`);
  if (lang !== folderLang) errors.push(`${relative}: lang(${lang ?? '누락'})과 폴더(${folderLang})가 다릅니다.`);
  const expectedFolder = expectedFolders[lang]?.[category];
  if (!expectedFolder) errors.push(`${relative}: ${lang}에서 지원하지 않는 category입니다 (${category ?? '누락'}).`);
  else if (categoryFolder !== expectedFolder) errors.push(`${relative}: category(${category}) 문서는 ${folderLang}/${expectedFolder}/에 있어야 합니다.`);
  if (!slug) errors.push(`${relative}: slug가 없습니다.`);
  else if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) errors.push(`${relative}: slug는 영문 소문자, 숫자, 하이픈만 사용할 수 있습니다.`);
  else {
    const key = `${lang}/${slug}`;
    if (seen.has(key)) errors.push(`${relative}: ${seen.get(key)}와 slug가 중복됩니다 (${key}).`);
    else seen.set(key, relative);
  }
  if (!translationKey) errors.push(`${relative}: translationKey가 없습니다.`);
  else {
    const translationId = `${lang}/${translationKey}`;
    if (translations.has(translationId)) errors.push(`${relative}: ${translations.get(translationId)}와 같은 언어에서 translationKey가 중복됩니다.`);
    else translations.set(translationId, relative);
  }
}
if (errors.length) {
  console.error(`콘텐츠 검사 실패 (${errors.length}건)\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
console.log(`콘텐츠 검사 완료: 게시물 ${files.length}개, 언어/카테고리 폴더/slug/번역 키 이상 없음.`);
