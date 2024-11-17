const flatten = require('../flatten');
const assert = require('chai').assert;
describe('#flatten', () => {
  it('Returns single level array with one nested array', () => {
    assert.deepEqual(flatten([1,2,3,[4,5],6,7,8]),[1,2,3,4,5,6,7,8]);
  });

  it('Returns single level array with two nested array', () => {
    assert.deepEqual(flatten([1,2,3,[4,5],[6,7],8]),[1,2,3,4,5,6,7,8]);
  });

  it('Returns single level array with multiple nested array', () => {
    assert.deepEqual(flatten([[1,2,3],[4,5],[6],[7,8]]),[1,2,3,4,5,6,7,8]);
  });

  it('Returns empty array if given empty array', () => {
    assert.deepEqual(flatten([]),[]);
  });
});