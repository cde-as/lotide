const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, valuePair) {
  const valuePairKeys = Object.keys(object);
  
  for (let key of valuePairKeys) { //lets us access each key from our array
    if (valuePair(object[key])) {
      return key; // "Blue Hill", "Akaleri", etc.
    }
  }
  return undefined; //if there isn't a matching key
};

const test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(test1, "noma");

module.exports = findKey;