const eqArrays = require('../eqArrays');
const assert = require('chai').assert;
describe('#eqArray', () => {
  it('Returns true with matching arrays' , () => {
    assert.deepEqual(eqArrays([1,2,3],[1,2,3]),true);
  });

  it('Returns false with different arrays' , () => {
    assert.deepEqual(eqArrays([1,2,3],[1,2,5]),false);
  });

  it('Works with booleans' , () => {
    assert.deepEqual(eqArrays([true,false,false],[true,false,false]),true);
  });

  it('Works with strings' , () => {
    assert.deepEqual(eqArrays(['hi','bye','sigh'],['hi','bye','sigh']),true);
  });

  it('Works with nested arrays' , () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]),true);
  });

  it('Works with nested multiple value types' , () => {
    assert.deepEqual(eqArrays([[2, 3], ['4',[false]]], [[2, 3], ['4',[false]]]),true);
  });

  it('Still returns false with multiple value types' , () => {
    assert.deepEqual(eqArrays([[2, 3], [4,[false]]], [[2, 3], ['4',[false]]]),false);
  });
  
});