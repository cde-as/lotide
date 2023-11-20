const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
};

const assertArraysEqual = function(actual, expected) {
  const areEqual = eqArrays(actual, expected);

  if (areEqual) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  const length = array.length;
  //const result = [];

  if (array.length <= 2) {
    return [];
  }

  if (length % 2 === 1) {
    const middleIndex = Math.floor(length / 2);
    return [array[middleIndex]];
  } else {
    const middleIndex = length / 2;
    return [array[middleIndex - 1], array[middleIndex]];
  }
};

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

module.exports = middle;