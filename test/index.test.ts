import { describe, it, expect } from "bun:test";
import * as json from "../src";

describe("available JSON data", () => {
  const availableKeys = Object.keys(json);

  availableKeys.forEach((key) => {
    it(`should include ${key}`, () => {
      // @ts-expect-error
      expect(json[key]).toBeDefined();
    });
  });
});
