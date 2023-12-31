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

/* Write a function that takes in an object and a value and returns the first key that corresponds to that value. If there isn't a key that matches that value return undefined. */

const bestTVShowsByGenre = {
  action: "The Last of Us",
  comedy: "Schitt's Creek",
  drama:  "Breaking Bad"
};

const findKeyByValue = function(object, titleOfShow) {
  const showKeys = Object.keys(bestTVShowsByGenre); // [action, comedy, drama]

  for (let key of showKeys) { //lets us access each key from our array showKeys
    //console.log(key); // [action, comedy, drama]
    if (object[key] === titleOfShow) { //object[key] gives us access to the value pairs aka the name of the shows, and when it equals the function parameter we return
      return key;
    }
  }
  return "undefined"; //if there isn't a matching key
};

assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"), "drama"); assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "Nonexistent Show"), "undefined");

module.exports = findKeyByValue;