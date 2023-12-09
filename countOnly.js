const { count } = require("console");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const result = {}; // Object stores results when name exists in itemsToCount

  for (const name of allItems) { //for every name in the firstNames array
    if (itemsToCount[name]) { // if the name exists in itemsToCount object then "true"
      if (result[name]) { // and if the name already exists in the result object
        result[name] += 1; //then add 1
      } else {
        result[name] = 1; // if it does not exist set to 1
      }
    }
  }
  return result;
};

// --- TEST CODE---

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1); //should pass
assertEqual(result1["Karima"], undefined); //should pass because Karima does not exist
assertEqual(result1["Fang"], 2); //should pass
assertEqual(result1["Agouhanna"], undefined); //should pass because Agouhanna in result1 != true and does not get passed into result object.

module.exports = countOnly;