const {
  performOperation,
  reverseString,
  memoizedFibonacci,
} = require("./demo");

describe("performOperation", () => {
  it("performs the correct arithmetic operation", () => {
    expect(performOperation(5, 2, "+")).toBe(7);
    expect(performOperation(5, 2, "-")).toBe(3);
    expect(performOperation(5, 2, "*")).toBe(10);
    expect(performOperation(5, 2, "/")).toBe(2.5);
  });
});

describe("reverseString", () => {
  it("reverses the input string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("world")).toBe("dlrow");
  });
});

describe("memoizedFibonacci", () => {
  it("returns the correct Fibonacci number", () => {
    expect(memoizedFibonacci(0)).toBe(0);
    expect(memoizedFibonacci(1)).toBe(1);
    expect(memoizedFibonacci(2)).toBe(1);
    expect(memoizedFibonacci(5)).toBe(5);
    expect(memoizedFibonacci(10)).toBe(55);
  });

  it("uses memoization to improve performance", () => {
    const startTime = Date.now();
    memoizedFibonacci(40);
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    expect(elapsedTime).toBeLessThan(100); // Ensure the function runs in less than 100 milliseconds
  });
});
