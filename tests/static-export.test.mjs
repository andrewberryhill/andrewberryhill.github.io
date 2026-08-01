import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = new URL("..", import.meta.url).pathname.replace(/^\/(?:[A-Za-z]:)/, (value) => value.slice(1));
const output = join(root, "out");
const pageFiles = [
  "index.html",
  join("research", "index.html"),
  join("teaching", "index.html"),
  join("short-bio", "index.html"),
];

test("all requested pages and public assets are exported", () => {
  for (const relativePath of pageFiles) {
    assert.ok(existsSync(join(output, relativePath)), `${relativePath} was not exported`);
  }

  for (const asset of ["andrew-berryhill.jpg", "andrew-berryhill-cv.pdf", "favicon.png", "og.png", ".nojekyll"]) {
    assert.ok(existsSync(join(output, asset)), `${asset} is missing from the export`);
  }
});

test("every internal link and image target in the exported pages resolves", () => {
  for (const relativePath of pageFiles) {
    const html = readFileSync(join(output, relativePath), "utf8");
    const targets = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);

    for (const target of targets) {
      if (!target.startsWith("/") || target.startsWith("//")) continue;

      const rootRelative = target.slice(1).split(/[?#]/, 1)[0];
      const candidate = rootRelative.endsWith("/")
        ? join(output, rootRelative, "index.html")
        : join(output, rootRelative || "index.html");

      assert.ok(existsSync(candidate), `${relativePath} contains a broken target: ${target}`);
    }
  }
});
