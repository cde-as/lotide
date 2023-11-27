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

const data1 = ["mocha", "latte", "cappuccino", "earl grey", "machiatto"];
const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) === true) {
      break;
    }
    results.push(callback(item));
    /*  console.log('drink: ', item);
    console.log('Is a type of tea: ', callback(item));
    console.log("--------------"); */
  }
  return results;
};

const results1 = takeUntil(data1, x => x === "earl grey");
console.log(results1);

const data2 = ["cold brew", "earl"];
const results2 = takeUntil(data2, x => x === "earl grey");

assertArraysEqual(results1, [false, false, false]);
assertArraysEqual(results2, [false, false]);