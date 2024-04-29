import { describe, expect } from "@jest/globals";
import inter from "./inter";

describe("inter", () => {
  it("should be a function", () => {
    expect(typeof inter).toBe("function");
  });

  it("should return an array", () => {
    expect(Array.isArray(inter([1, 2], [1, 3]))).toBe(true);
  });

  it("should return an array with the elements in common between to two array passed as params", () => {
    expect(inter([1, 2], [1, 3])).toEqual([1]);
    expect(inter([1, 3, 2], [1, 2])).toEqual([1, 2]);
    expect(inter([1, 2, 8, 42], [1, 3, 42, 2])).toEqual([1, 2, 42]);
    expect(inter(["1", "2"], ["1", "3"])).toEqual(["1"]);
    expect(inter(["1", "2"], [1, "3"])).toEqual([]);
  });
});
