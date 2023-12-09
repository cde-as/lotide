const assert = require('chai').assert;
const tail = require('../tail');

/*  Using assert.deepEqual to make sure contents are equal vs. strictEqual does not let us check for content equality but we can check for things like length as we're comparing number values*/

describe("#tail", () => {
  it("returns [6,7] for ([5,6,7])", () => {
    assert.deepEqual(tail([5, 6, 7]), [6,7]);
  });
});

it("returns 2 for ['Hello', 'Lighthouse', 'Labs'].length", () => {
  assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
});

it("returns [ ] for an empty array", () => {
  assert.strictEqual(tail([]).length, 0);
});

it("returns [ ] for an empty array", () => {
  assert.deepEqual(tail([]), []);
});

it("returns [ ] for an array with only one variable", () => {
  assert.deepEqual(tail([1]), []);
});