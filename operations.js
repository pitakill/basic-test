const math = require('mathjs');

const format = (result) => Number(math.format(result, { precision: 14 }));

const addition = (a, b) => format(math.add(a, b));

const subtraction = (a, b) => format(math.subtract(a, b));

const multiplication = (a, b) => format(math.multiply(a, b));

const division = (a, b) => {
  if (b === 0) {
    return NaN;
  }
  return format(math.divide(a, b));
};

module.exports = { addition, subtraction, multiplication, division };
