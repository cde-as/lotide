const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      //console.log(false);
      return false;
    }
  }
  //console.log(true);
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

//returns the key from value-pair
// if there isn't a key that matches that value return undefined
const bestTVShowsByGenre = {
  action: "The Last of Us",
  comedy: "Schitt's Creek",
  drama:  "Breaking Bad"
};

const showKeys = Object.keys(bestTVShowsByGenre);
console.log(showKeys);


//findKeyByValue(bestTVShowsByGenre, "Breaking Bad");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"), "drama");