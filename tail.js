const assertEqual = require('./assertEqual');

const tail = function(array) {
  const result = [];
  for (let i = 1; i < array.length; i++) {
    result.push(array[i]);
  }
  //console.log(result);
  return result;
};

module.exports = tail;