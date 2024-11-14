const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', () => {
  it('returns the 2 middle indexes [3,4] of an even array [1,2,3,4,5,6]', () => {
    assert.deepEqual(middle([1,2,3,4,5,6]),[3,4]);
  });
  it('returns the middle index [4] of an odd array [1,2,3,4,5,6,7]', () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7]),[4]);
  });
  it('returns [] if the length is 2', () => {
    assert.deepEqual(middle([1,2]),[]);
  });
  it('returns an [] if array has 1 value', () => {
    assert.deepEqual(middle([1]),[]);
  });
  it('returns [] if array has no value ', () => {
    assert.deepEqual(middle([]),[]);
  });
});


