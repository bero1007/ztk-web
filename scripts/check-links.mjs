import { readdirSync, readFileSync } from 'node:fs';
import { extname, join, posix, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const base = '/ztk-web';
const files = [];

const visit = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const absolute = join(directory, entry.name);
    if (entry.isDirectory()) visit(absolute);
    else files.push(absolute);
  }
};

visit(dist);
const knownFiles = new Set(files.map((file) => relative(dist, file).replaceAll('\\', '/')));
const failures = [];

for (const file of files.filter((candidate) => candidate.endsWith('.html'))) {
  const source = readFileSync(file, 'utf8');
  const publicFile = relative(dist, file).replaceAll('\\', '/');
  const publicDirectory = posix.dirname(`/${publicFile}`);

  for (const match of source.matchAll(/(?:href|src)=["']([^"'<>]+)["']/g)) {
    const raw = match[1];
    if (/^(?:#|https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(raw)) continue;

    const clean = decodeURIComponent(raw.split(/[?#]/, 1)[0]);
    let target;
    if (clean.startsWith('/')) {
      if (clean !== base && !clean.startsWith(`${base}/`)) {
        failures.push(`${publicFile}: path outside configured base → ${raw}`);
        continue;
      }
      target = clean.slice(base.length) || '/';
    } else {
      target = posix.resolve(publicDirectory, clean);
    }

    const normalized = target.replace(/^\//, '');
    const candidates = normalized === ''
      ? ['index.html']
      : extname(normalized)
        ? [normalized]
        : [normalized, posix.join(normalized, 'index.html')];

    if (!candidates.some((candidate) => knownFiles.has(candidate))) {
      failures.push(`${publicFile}: missing target → ${raw}`);
    }
  }
}

if (failures.length) {
  console.error(`Broken internal links: ${failures.length}`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Checked ${files.filter((file) => file.endsWith('.html')).length} HTML pages: no broken internal href/src targets.`);
