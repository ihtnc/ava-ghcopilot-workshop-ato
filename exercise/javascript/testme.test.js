const {
  performOperation,
  reverseString,
  memoizedFibonacci,
} = require("./testme");

describe("performOperation", () => {
  it("performs the arithmetic operation between two numbers", () => {
    expect(performOperation(5, 3, "+")).toBe(8);
    expect(performOperation(10, 4, "-")).toBe(6);
    expect(performOperation(6, 2, "*")).toBe(12);
    expect(performOperation(15, 3, "/")).toBe(5);
  });
});

describe("reverseString", () => {
  it("reverses the given string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("world")).toBe("dlrow");
    expect(reverseString("")).toBe("");
  });
});

describe("memoizedFibonacci", () => {
  it("returns the nth Fibonacci number using memoization", () => {
    expect(memoizedFibonacci(0)).toBe(0);
    expect(memoizedFibonacci(1)).toBe(1);
    expect(memoizedFibonacci(5)).toBe(5);
    expect(memoizedFibonacci(10)).toBe(55);
  });
});
