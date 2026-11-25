// Unsent: The Micro-Confession Sprint
// Writes one two-part micro-confession to /output/entry.txt:
// a To: line naming who it was meant for, then the unsent line itself,
// exactly as it was typed, with no explanation after it.

import { mkdirSync, writeFileSync } from "node:fs";

const toLine =
  "To: Mom";
const message =
  "i only call on sundays because i don't know how to tell you i'm not okay on the other six days";

// The gate: 1-260 characters total, message line at most 200 characters,
// exactly two lines, no trailing newline.
const entry = `${toLine}\n${message}`;
const lines = entry.split("\n");

if (entry.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (message.trim().length === 0) {
  throw new Error("message line must not be empty");
}
if (entry.length < 1 || entry.length > 260) {
  throw new Error(`entry is ${entry.length} characters, must be 1-260`);
}
if (message.length > 200) {
  throw new Error(`message line is ${message.length} characters, must be at most 200`);
}
if (lines.length !== 2) {
  throw new Error(`entry must be exactly 2 lines, got ${lines.length}`);
}
if (!toLine.startsWith("To: ")) {
  throw new Error(`first line must start with "To: "`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote /output/entry.txt (${entry.length} characters, message ${message.length})`);
