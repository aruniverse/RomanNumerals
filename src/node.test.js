import assert from "node:assert";
import { describe, it, test } from "node:test";

describe("Node TestRunner", () => {
  it("should pass", () => {
    console.log("Test passed");
  });

  test("some test", (t) => {
    assert.strictEqual(1, 1);
  });
});
