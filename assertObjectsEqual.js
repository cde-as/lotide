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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  const keys1 = Object.keys(object1); // gives us an array of keys from Object1
  //const keys2 = Object.keys(object2);

  for (let key of keys1) {
    if (Array.isArray(object2[key]) && Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect; // <= add this line
  console.log(`Example label: ${inspect(actual)}`);
  console.log(`Example label: ${inspect(expected)}`);

  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)} `
    );
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

//We need to use that return value in combination with assertEquals to test if the function is working correctly.

//console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

// -----------------------

eqObjects(shirtObject , longSleeveShirtObject); // => false
assertObjectsEqual(shirtObject,anotherShirtObject);

// -----------------------
assertObjectsEqual(shirtObject, longSleeveShirtObject);

module.exports = assertObjectsEqual;