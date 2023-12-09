const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
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

// Write a function that takes in a string and returns all indices of letter positions in the string.

const letterPositions = function(sentence) {
  const result = {};

  for (let i = 0; i < sentence.length; i++) { //for every index in sentence
    if (sentence[i] !== " ") {
      if (result[sentence[i]]) {
        result[sentence[i]].push(i);
      } else {
        result[sentence[i]] = [i];
      }
    }
  }
  console.log(result);
  return result;
};

// --- TEST CODE ---
assertArraysEqual(letterPositions("hello").e, [1]);
letterPositions("lighthouse in the house");

module.exports = letterPositions;
