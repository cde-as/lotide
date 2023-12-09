const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should log "true" giving an assertion pass
assertArraysEqual([1, 2, 3], [1, 2, "3"]); // "Should log "false" because the arrays are not equal"
assertArraysEqual([1, 2, 3], [1, 2, 4]); // "Should log "false" because the arrays are not equal"