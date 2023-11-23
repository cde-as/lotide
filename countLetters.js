const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function should take in a string and return a count of each letter
// Return should be an object
// Tip: You can use for...of loop with strings
const countLetters = function(string) {
  const result = {};

  for (const letter of string) { // for each letter in the string
    console.log(string[letter]);
    if (string[letter]) { //if the letter exists in the string
    
      if (result[letter]) { // and if the letter already exists in result object
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  console.log(result);
  return result;
};



// TEST CODE
countLetters("LHL");