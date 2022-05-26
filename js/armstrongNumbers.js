/**
 * Returns an array of all Armstrong numbers in the range [min, max]
 *
 * @param {Array} arr Array of numbers to check
 * @returns {Array} Array of Armstrong numbers
 */
const findArmstrongNumbers = (arr) => {
  const result = [];

  for (const num of arr) {
    const numArray = num
      .toString()
      .split("")
      .map((a) => Number(a));

    const length = numArray.length;

    let sum = numArray.reduce((acc, cur) => acc + cur ** length, 0);
    if (sum === num) {
      result.push(num);
    }
  }

  return result;
};

module.exports = { findArmstrongNumbers };
