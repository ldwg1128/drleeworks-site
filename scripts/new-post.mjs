import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const [lang, section, slug, ...titleParts] = process.argv.slice(2);
const title = titleParts.join(' ');
const categories = {
  ko: { computing: '컴퓨팅', engineering: '공학', records: '기록' },
  en: { computing: 'Computing', engineering: 'Engineering', records: 'Notes' }
};
if (!categories[lang]?.[section] || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug ?? '') || !title) {
  console.error('사용법: npm run post:new -- <ko|en> <computing|engineering|records> <slug> <제목>');
  process.exit(1);
}
const parent = path.resolve('src/content/posts', lang, section);
const directory = path.join(parent, slug);
const file = path.join(directory, 'index.md');
const date = new Date().toISOString().slice(0, 10);
const summary = lang === 'ko' ? '여기에 글의 짧은 요약을 작성하세요.' : 'Write a short summary here.';
const opening = lang === 'ko' ? '첫 문단을 작성하세요.' : 'Write the opening paragraph.';
const heading = lang === 'ko' ? '첫 번째 소제목' : 'First section';
const body = lang === 'ko' ? '본문을 작성하세요.' : 'Write the article body.';
const content = `---\ntitle: ${title}\nslug: ${slug}\ntranslationKey: ${slug}\nlang: ${lang}\npublished: ${date}\ncategory: ${categories[lang][section]}\ntags: []\nauthor: DrLeeWorks\nsummary: ${summary}\nrecommended: false\ndraft: true\n---\n\n${opening}\n\n## ${heading}\n\n${body}\n`;
await mkdir(parent, { recursive: true });
// Refuse an existing post folder, including one containing index.mdx.
await mkdir(directory);
await writeFile(file, content, { flag: 'wx' });
console.log(path.relative(process.cwd(), file));
