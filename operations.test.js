const { addition, subtraction, multiplication, division } = require('./operations');

describe('Basic Math operations', () => {
  // Addition test cases
  let tests = [
    [3, 4, 7],
    [40, 100_000, 100_040],
    [0.1, 0.2, 0.3],
    [-0.1, 0.2, 0.1],
  ];
  it.each(tests)('addition(%s, %s) should be %s', (a, b, result) => {
    expect(addition(a, b)).toBe(result);
  });

  // Subtraction test cases
  tests = [
    [1, 1, 0],
    [0.2, 0.1, 0.1],
    [0.2, 0.3, -0.1],
  ];
  it.each(tests)('subtraction(%s, %s) should be %s', (a, b, result) => {
    expect(subtraction(a, b)).toBe(result);
  });

  // Multiplication test cases
  tests = [
    [1, 1, 1],
    [-1, 1, -1],
    [-1, 0, 0],
    [-0.1, 0, 0],
    [-0.1, 0.2, -0.02],
  ];
  it.each(tests)('multiplication(%s, %s) should be %s', (a, b, result) => {
    expect(multiplication(a, b)).toBe(result);
  });

  // Division
  tests = [
    [10, 1, 10],
    [1, 2, 0.5],
    [0.1, 0.2, 0.5],
    [-1, 0, NaN],
    [1, 0, NaN],
    [10, 3, 3.3333333333333],
  ];
  it.each(tests)('division(%s, %s) should be %s', (a, b, result) => {
    expect(division(a, b)).toBe(result);
  });
});
