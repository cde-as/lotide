const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  // Create an object to store results, if firstNames exists add 1 to count
  const result = {};

  for (const name in allItems) { //for every name in the firstNames array
    if (itemsToCount[name]) { // if the name exists in itemsToCount object
      if (result[name]) { // and if the name already exists in the result object
        result[name] += 1; //then add 1
        console.log(result);
      } else {
        result[name] = 1; // if it does not exist set to 1
      }
    }
    console.log(result);
    return result;
  }
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
assertEqual(result1["Karima"], undefined); //should pass
//assertEqual(result1["Fang"], 2); //should pass
//assertEqual(result1["Agouhanna"], undefined);
