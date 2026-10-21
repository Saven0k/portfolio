// Node.js 22.6+: node --experimental-strip-types --test tests/age.test.mjs
import assert from "node:assert/strict";
import test from "node:test";
import { getAge } from "../src/data/age.ts";
import { profile } from "../src/data/profile.ts";

test("age changes on the birthday at Moscow midnight", () => {
  assert.equal(profile.birthDate, "2007-10-12");
  const cases = [
    ["2026-01-01T00:00:00Z", 18],
    ["2026-10-11T20:59:59.999Z", 18],
    ["2026-10-11T21:00:00Z", 19],
    ["2026-10-21T09:00:00Z", 19],
    ["2026-12-31T23:00:00Z", 19],
    ["2027-10-11T20:59:59.999Z", 19],
    ["2027-10-11T21:00:00Z", 20],
  ];
  for (const [date, expected] of cases) {
    assert.equal(getAge(profile.birthDate, new Date(date)), expected, date);
  }
});
