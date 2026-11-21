// The poem about stopping — writes the poem to /output/entry.txt.
// Deterministic, no network: the poem is fixed in this file.
import { mkdirSync, writeFileSync } from 'fs';

const poem = [
  'I wrote the whole reply.',
  'My thumb above Send,',
  'the sentence leaning forward,',
  'already halfway out the door.',
  'I stopped.',
  'The stopping was the first thing',
  'I had done all day',
  'that was entirely mine.',
].join('\n');

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', poem);
