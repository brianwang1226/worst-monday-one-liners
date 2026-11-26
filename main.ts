// Worst Monday One-Liners — make.fun one-liner entry.
// One line about the worst Monday: three alarms set, woke up late anyway,
// a boss asking where you are, and a lie told from bed. The kicker lands
// on the last sentence — the reply was sent, the trip never happened.
// Written to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Monday. Alarms at 6:30, 6:35, 6:40. Woke at 9:12. Boss texted 'where are you'. I replied 'on my way' from bed. I was not on my way.";
const MAX_CHARS = 140;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
