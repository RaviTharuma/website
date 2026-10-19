import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const homepage = JSON.parse(readFileSync(new URL("../src/data/homepage.json", import.meta.url)));
const pages = JSON.parse(readFileSync(new URL("../src/data/pages.json", import.meta.url)));
const site = JSON.parse(readFileSync(new URL("../src/data/site.json", import.meta.url)));
const schema = readFileSync(new URL("../sanity/schemaTypes/index.ts", import.meta.url), "utf8");

test("homepage keeps the short Lava Line structure", () => {
  assert.equal(homepage.headline, "Senior counsel for companies that already have a team.");
  assert.equal(homepage.points.length, 3);
  assert.equal(homepage.changes.length, 3);
  assert.equal(homepage.proof.length, 5);
  assert.equal(homepage.metric.value, "12");
});

test("routes named in the header exist as page documents", () => {
  for (const key of ["practice", "work", "method", "about", "impressum", "privacy"]) {
    assert.equal(typeof pages[key].headline, "string");
  }
});

test("contact points at the named profiles and mailbox", () => {
  assert.equal(site.email, "ravi.tharuma@lava.agency");
  assert.equal(site.github, "https://github.com/ravitharuma");
  assert.equal(site.linkedin, "https://www.linkedin.com/in/ravitharuma");
});

test("sanity schema does not name a project, dataset, or token", () => {
  assert.doesNotMatch(schema, /projectId|dataset|token/i);
});
