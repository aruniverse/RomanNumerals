/// <reference types="vitest" />

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // reporters: ["json", "default"],
    reporters: process.env.GITHUB_ACTIONS
      ? ["dot", "github-actions"]
      : ["json", "junit", "default", "html"],
    outputFile: {
      junit: "./tests/unit/junit-report.xml",
      json: "./tests/unit/json-report.json",
    },
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "html"],
      reportsDirectory: "./tests/unit/coverage",
    },
  },
});
