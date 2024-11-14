const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  it('returns [2,3] for [1,2,3]', () => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  });
  it('returns ["bye","sigh"] for ["hi","bye,"sigh"]', () => {
    assert.deepEqual(tail(['hi','bye','sigh']), ['bye','sigh']);
  });
  it('returns [true,false] for [false,true,false]', () => {
    assert.deepEqual(tail([false,true,false]), [true,false]);
  });
  it('returns empty array for []', () => {
    assert.deepEqual(tail([]), []);
  });
  it('returns empty array for single value[1]', () => {
    assert.deepEqual(tail([1]), []);
  });
});