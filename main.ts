// The Moon Finally Answers Back — entry program.
//
// Writes a single line (1–240 characters) in the voice of the Moon
// replying at last to the wishes, howls and late-night promises of
// everyone staring up at it, to /output/entry.txt, where the make.fun
// gate scorer reads it.
//
// The line: the Moon has heard every wish, every howl, every 3 a.m.
// promise for four billion years — and tonight it answers. The quiet
// ones get yes, the howlers get the dark side, and the promises?
// It kept receipts. Wry, old, a little tired of being wished upon,
// and the comeback lands in the final clause.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I heard every wish, every howl, every 3 a.m. promise — for four billion years. Tonight I finally answer: the quiet ones get yes, the howlers get the dark side, and the promises? I kept receipts.";

// Gate: the scorer accepts 1–240 characters, a single line, non-blank.
if ([...ENTRY].length < 1 || [...ENTRY].length > 240 || ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error(`entry violates the 1–240 single-line gate (${[...ENTRY].length} chars)`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${[...ENTRY].length} characters to ${join(outDir, "entry.txt")}`);
