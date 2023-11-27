//----------FIRST ITERATION---------
/* const drinks = ["mocha", "latte", "americano", "cappuccino", "cortado"];

const map = function(drinks, callback) {
  console.log('array: ', drinks); //returns undefined
  console.log('callback: ', callback); //returns undefines

  const results = []; //returns empty array
  return results;
};

console.log(map()); */
// ------------------------------------------------------

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

const drinks = ["mocha", "latte", "americano", "cappuccino", "cortado"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
};

//Define a callback function
const callback = function(array) {
  return array.length;
};

const lengthOfDrinks = map(drinks, callback);
console.log(lengthOfDrinks);

assertArraysEqual(lengthOfDrinks, [5,5,9,10,7]); // Should return true
