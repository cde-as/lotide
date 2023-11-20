/* 
Instructions:

Implement a function eqArrays which takes in two arrays and returns true or 
  false, based on a perfect match.
 Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

 */

 const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
