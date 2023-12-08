const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should return false
assertArraysEqual([1, 2, 3], [1, 2, "3"]); // Should return false
assertArraysEqual([1, 2, 3], [1, 2, 4]); // Should return false