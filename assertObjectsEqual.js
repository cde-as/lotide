const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  //if the length of keys are not the same it's not equal return false
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    console.log(object1[key]);
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

//  ------- FUNCTION IMPLEMENTATION ----------

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect; // <= add this line
  console.log(`Example label: ${inspect(actual)}`);

  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(actual)} `
    );
  } else {
    (actual !== expected);
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(actual)}`
    );
  }
};

// ---------- TEST CODE -------------
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

console.log(eqObjects(shirtObject, anotherShirtObject)); // => true
assertObjectsEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
eqObjects(shirtObject, longSleeveShirtObject); // => false

assertObjectsEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
assertObjectsEqual(eqObjects(shirtObject, longSleeveShirtObject), true); // => should return failed
