/**
 * Returns the sum of an array of numbers
 *
 * @param {Array} arr Array of numbers to sum
 * @returns {Number} Sum of all numbers in arr
 */
const sum = (arr) => arr.reduce((a, b) => a + b, 0);

/**
 * Returns whether or not the number is an Armstrong number
 *
 * @param {Number} number Number to check
 * @returns {Boolean} True if number is Armstrong number
 */
const isArmstrongNumber = (number) => {
  const digits = number.toString().split("");
  return sum(digits.map((digit) => digit ** digits.length)) === number;
};

/**
 * Returns an array of all Armstrong numbers in the range [min, max]
 *
 * @param {Array} arr Array of numbers to check
 * @returns {Array} Array of Armstrong numbers
 */
const findArmstrongNumbers = (arr) => arr.filter(isArmstrongNumber);

module.exports = { findArmstrongNumbers };
