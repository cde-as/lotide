const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  const result = [];
  for (let i = 1; i < array.length; i++) {
    result.push(array[i]);
  }
  //console.log(result);
  return result;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
//assertEqual(tail([5,6,7]).length, 2);
//assertEqual(tail(["Hello", "Lighthouse", "Labs"]));
//assertEqual(tail([]));
//assertEqual(tail)