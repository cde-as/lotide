const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = function(object, valuePair) {
  const valuePairKeys = Object.keys(object); // [Blue Hill, Akaleri, noma...]
  
  for (let key of valuePairKeys) { //lets us access each key from our array
    //console.log(object[key].stars);
    console.log(valuePair(object[key])); //NOTE: valuePair[key] is returning undefined.
    if (object[key].stars === valuePair) { //object[key]: stars: 1,3,2,3,2,3
      return key;
    }
  }
  return "undefined"; //if there isn't a matching key
};

const test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

//assertEqual(test1, 2);

