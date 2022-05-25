// Can you translate this driver code to unit tests?

var arm = require("./armstrongNumbers");
var shallowEqualArrays = require("shallow-equal/arrays");

function createArrayOfNum(maxValue) {
  return Array.apply(null, { length: maxValue }).map(Number.call, Number);
}

test("shold return true for armstrong numbers", () => {
  expect(arm.isArmstrongNumber(5)).toBe(true);
  expect(arm.isArmstrongNumber(8)).toBe(true);
  expect(arm.isArmstrongNumber(9)).toBe(true);
  expect(arm.isArmstrongNumber(3)).toBe(true);
  expect(arm.isArmstrongNumber(153)).toBe(true);
  expect(arm.isArmstrongNumber(100)).toBe(false);
  expect(arm.isArmstrongNumber(125)).toBe(false);
  expect(arm.isArmstrongNumber(200)).toBe(false);
  expect(arm.isArmstrongNumber(150)).toBe(false);
});

test("should find armstrong numbers", () => {
  expect(shallowEqualArrays(arm.findArmstrongNumbers([0]), [0])).toBe(true);
  expect(
    shallowEqualArrays(
      arm.findArmstrongNumbers(createArrayOfNum(8)),
      [0, 1, 2, 3, 4, 5, 6, 7]
    )
  ).toBe(true);
  expect(
    shallowEqualArrays(
      arm.findArmstrongNumbers(createArrayOfNum(99)),
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    )
  ).toBe(true);
  expect(
    shallowEqualArrays(
      arm.findArmstrongNumbers(createArrayOfNum(999)),
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407]
    )
  ).toBe(true);
});
