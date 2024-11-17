const letterPositions = require('../letterPositions');
const assert = require('chai').assert;
describe('#letterPostions', () => {
  it('Returns [2,3] for L in "hello"' , () => {
    assert.deepEqual(letterPositions("Hello").l,[2,3])
  });

  it('Is not case sensitive"' , () => {
    assert.deepEqual(letterPositions("Hello").l,[2,3])
  });

  it('Returns [4,8,14,22] for o in "Random words to think of"' , () => {
    assert.deepEqual(letterPositions("Random words to think of").o,[4,8,14,22])
  });

  it('returns empty object when no value is given' , () => {
    assert.deepEqual(letterPositions(""),{})
  });

});