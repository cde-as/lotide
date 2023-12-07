const eqObjects = function(object1, object2) {
  //if the lengths are not the same return false immediately
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  const keys1 = Object.keys(object1); // gives us an array of keys from Object1

  for (let key of keys1) {
    //for each key in object1
    //console.log("Obj 2 key", object2[key]);
    //console.log("Obj 1 key", object1[key]);
    if (Array.isArray(object2[key]) && Array.isArray(object1[key])) {
      return true;
    }
    if (object2[key]) {
      if (object1[key] === object2[key]) {
        return true;
      }
    }
    return false;
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require("util").inspect; // <= add this line
  console.log(`Example label: ${inspect(actual)}`);
  if (actual === true) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(actual)} `
    );
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

console.log(eqObjects(shirtObject , anotherShirtObject)); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertObjectsEqual(eqObjects(shirtObject , anotherShirtObject), true);



const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertObjectsEqual(eqObjects(shirtObject , longSleeveShirtObject), false);