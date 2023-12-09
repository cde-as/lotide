const assertEqual = require('./assertEqual');

const middle = function(array) {
  const length = array.length;
  //const result = [];

  if (array.length <= 2) {
    return [];
  }

  if (length % 2 === 1) {
    const middleIndex = Math.floor(length / 2);
    return [array[middleIndex]];
  } else {
    const middleIndex = length / 2;
    return [array[middleIndex - 1], array[middleIndex]];
  }
};

module.exports = middle;