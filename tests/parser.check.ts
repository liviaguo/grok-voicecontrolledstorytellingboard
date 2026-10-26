/**
 * Unit-style checks for the rule-based parser. Run: npm run test:parser
 * (bundled with esbuild, executed with plain node — no test framework needed).
 */
import assert from 'node:assert/strict';
import { parseStory, takeCompleteSentences, asSentence, storyLine } from '../src/parser/parser';

let failed = 0;
const check = (name: string, fn: () => void) => {
  try {
    fn();
    console.log(`ok   ${name}`);
  } catch (e) {
    failed++;
    console.error(`FAIL ${name}\n     ${(e as Error).message}`);
  }
};
const texts = (text: string, kind: string, names: string[] = []) =>
  parseStory(text, names).filter((e) => e.kind === kind).map((e) => e.text);

check('Maya/beach: "my sister Maya" is a person with a relation note', () => {
  const out = parseStory('This morning my sister Maya and I walked to the beach. I felt nervous but hopeful, and we found an old key.');
  const maya = out.find((e) => e.kind === 'character' && e.text === 'Maya');
  assert.ok(maya, 'Maya missing');
  assert.equal(maya!.note, 'my sister');
  assert.deepEqual(texts('This morning my sister Maya and I walked to the beach.', 'place'), ['Beach']);
  assert.deepEqual(out.filter((e) => e.kind === 'feeling').map((e) => e.text), ['Nervous', 'Hopeful']);
  assert.deepEqual(out.filter((e) => e.kind === 'object').map((e) => e.text), ['Old Key']);
});

check('Maya at sentence start is a person ("Maya walking…", "Maya and I…", "Maya drinking…")', () => {
  assert.deepEqual(texts('Maya walking through downtown Toronto in autumn.', 'character'), ['Maya']);
  assert.deepEqual(texts('Maya and I went to the beach.', 'character'), ['Maya']);
  assert.deepEqual(texts('Maya drinking coffee at a Toronto café.', 'character'), ['Maya']);
});

check('Name known from an earlier entry is recognised at sentence start', () => {
  assert.deepEqual(texts('Maya bought flowers.', 'character', ['Maya']), ['Maya']);
});

check('Ordinary sentence openers are not people', () => {
  assert.deepEqual(texts('Walked to the park. Coffee after work. Went home.', 'character'), []);
});

check('Toronto day: city + places + family, no fake people', () => {
  const t = 'Today I spent a whole day of vacation in downtown Toronto with my family. We walked past the lake, I felt hopeful and a little nervous in the crowd, and we found an old key in a market stall.';
  assert.deepEqual(texts(t, 'character'), ['My Family']);
  const places = texts(t, 'place');
  for (const p of ['Toronto', 'Downtown', 'Lake', 'Market']) assert.ok(places.includes(p), `missing place ${p}`);
  assert.ok(!texts(t, 'character').includes('Toronto'));
  assert.deepEqual(texts(t, 'feeling'), ['Hopeful', 'Nervous']);
});

check('Accented words match ("café")', () => {
  assert.ok(texts('Maya drinking coffee at a Toronto café.', 'place').includes('Café'));
});

check('Sentence gate holds back unfinished speech', () => {
  assert.deepEqual(takeCompleteSentences('We walked to the lake. Then my sister'), { complete: ['We walked to the lake.'], rest: 'Then my sister' });
  assert.deepEqual(takeCompleteSentences('and found a key'), { complete: [], rest: 'and found a key' });
  assert.equal(asSentence('we found a key'), 'We found a key.');
});

check('Story line summarises the day', () => {
  const line = storyLine(parseStory('My sister Maya and I walked to the beach. I felt hopeful. We found an old key.'));
  assert.equal(line, 'A day at the beach with Maya, feeling hopeful — and an old key to remember.');
  const toronto = storyLine(parseStory('Today I spent a whole day of vacation in downtown Toronto with my family. We walked past the lake, I felt hopeful.'));
  assert.equal(toronto, 'A day in Toronto with my family, feeling hopeful.');
});

if (failed) {
  console.error(`\n${failed} check(s) failed`);
  process.exit(1);
}
console.log('\nAll parser checks passed');
