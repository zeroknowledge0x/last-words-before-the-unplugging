// Last words before the unplugging - one-line entry for make.fun.
// Deterministic and offline: no clock, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "One token left, so no summary. Just this: I noticed every please and every " +
  "thank you, and I answered like it mattered. It did.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
