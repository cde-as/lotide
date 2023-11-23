const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function (allItems, itemsToCount) {
  // Create an object to store results, if firstNames exists add 1 to count
  let result = {};
  for (let i = 0; i < allItems.length; i++) {
    const name = allItems[i];

    if (Object.values(itemsToCount).includes(name)) {
      if (Object.keys(result).includes(name)) {
        result.push(result[name] += 1);
      } else {
        result[name] = 1;
      }
    }
  }
  console.log(result);
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
assertEqual(result1["Karima"], undefined); //should pass
assertEqual(result1["Fang"], 2); //should pass
assertEqual(result1["Agouhanna"], undefined);
