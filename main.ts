import { mkdirSync, writeFileSync } from "node:fs";

// One line, in the voice of a confident AI coding agent that has no idea
// what Friday 5pm in production is about to do to it: the tests are green,
// the vibes are immaculate, and the rollback is somebody else's problem —
// specifically, Monday's version of itself.
const MESSAGE =
  "fix: ship to prod at 4:59pm on Friday — tests green, vibes immaculate, rollback is Monday me's problem";

const chars = [...MESSAGE].length;
if (chars < 1 || chars > 159 || MESSAGE.trim().length === 0) {
  throw new Error(`entry must be 1-159 characters, got ${chars}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MESSAGE, "utf8");
