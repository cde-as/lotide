/* Instructions: we need to filter our data by removing some unwanted items 

-Implement a function called "without" which will return a subset of a given array, removing unwanted elements.
-This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.
-Write a test case to make sure that the original array is not modified.
*/


const eqArrays = function(firstArray, secondArray) {
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


const without = function(source, itemsToRemove) {
  let wantedValue = [];

    for (let i = 0; i < source.length; i++) {
      if (!itemsToRemove.includes(source[i])) {
        wantedValue.push(source[i]);
      }  
    }
    return wantedValue;
};

// TEST CODE
/*console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
*/

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3, 4, 5], [2, 4]), [1, 3, 5]);
assertArraysEqual(without([1, 2, 3, 4, 5], []), [1, 2, 3, 4, 5]);