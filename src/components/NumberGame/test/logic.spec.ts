import { generateRandomArray } from '../logic'

describe("generateRandomArray", () => {
  it("should generate an array of the specified length with distinct random numbers", () => {
    const length = 10;
    const result = generateRandomArray(length);

    expect(result).toHaveLength(length);

    const sortedResult = [...result].sort((a, b) => a - b);
    const expected = Array.from({ length }, (_, index) => index + 1);

    expect(sortedResult).toEqual(expected);
    expect(result).not.toEqual(expected);
  });
});

