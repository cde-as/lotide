/* Write a function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.
 */

const eqArrays = function (firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
};

const assertArraysEqual = function (actual, expected) {
  const areEqual = eqArrays(actual, expected);

  if (areEqual) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function (source, itemsToRemove) {
  let wantedValue = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      wantedValue.push(source[i]);
    }
  }
  return wantedValue;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3, 4, 5], [2, 4]), [1, 3, 5]);
assertArraysEqual(without([1, 2, 3, 4, 5], []), [1, 2, 3, 4, 5]);

module.exports = without;