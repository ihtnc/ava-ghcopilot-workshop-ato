const { getRandomInt } = require("./utilities");

describe("getRandomInt", () => {
  it("returns a random integer within the specified range", () => {
    expect(getRandomInt(1, 10)).toBeGreaterThanOrEqual(1);
    expect(getRandomInt(1, 10)).toBeLessThanOrEqual(10);
    expect(getRandomInt(-5, 5)).toBeGreaterThanOrEqual(-5);
    expect(getRandomInt(-5, 5)).toBeLessThanOrEqual(5);
    expect(getRandomInt(0, 0)).toBe(0);
  });

  it("throws an error if 'min' is greater than 'max'", () => {
    expect(() => getRandomInt(10, 1)).toThrow(
      "Invalid arguments: 'min' must be less than 'max' and both must be numbers."
    );
  });

  it("throws an error if 'min' or 'max' is not a number", () => {
    expect(() => getRandomInt("1", 10)).toThrow(
      "Invalid arguments: 'min' must be less than 'max' and both must be numbers."
    );
    expect(() => getRandomInt(1, "10")).toThrow(
      "Invalid arguments: 'min' must be less than 'max' and both must be numbers."
    );
  });
});
