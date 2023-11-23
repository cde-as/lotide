const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function should take in a string and return a count of each letter
// Return should be an object
// Tip: You can use for...of loop with strings
const countLetters = function (string) {
  const result = {};

  for (let i = 0; i < string.length; i++) {
    // for each letter in the string
    //console.log(string[i]);
    if (string[i]) {
      //if the letter exists in the string
      if (result[string[i]]) {
        // and if the letter already exists in result object
        result[string[i]] += 1;
      } else {
        result[string[i]] = 1;
      }
    }
  }
  //console.log(result);
  return result;
};

// -------- TEST CODE ------
console.log(countLetters("LHL"));
console.log(countLetters("apple"));

//console.log(countLetters("LHL")["L"]); // Returns: 2 -> This gives us access to the value of the key "L"
assertEqual(countLetters("LHL")["L"], 2);
assertEqual(countLetters("apple")["p"], 2);
assertEqual(countLetters("apple")["a"], 2);
