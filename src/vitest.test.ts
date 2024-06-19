import { describe, expect, it } from "vitest";

describe("vitest", () => {
  it("should pass", () => {
    console.log("Test passed");
  });
  it("should fail", () => {
    expect({ hello: "x" }).toBe({ hello: "y" });
  });
});

// An entry will be shown in the report for this suite
describe.todo("unimplemented suite");
