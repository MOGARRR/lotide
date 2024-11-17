const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;
describe('#findKeyByValue', () => {
  it('Returns key when given string value' , () => {
    assert.strictEqual(findKeyByValue({drama: "The Wire", comedy: "Brooklyn Nine-Nine", sci_fi: "The Expanse"},"The Wire"), "drama");
  });

  it('Returns undefined if object does not contain value' , () => {
    assert.strictEqual(findKeyByValue({drama: "The Wire", comedy: "Brooklyn Nine-Nine", sci_fi: "The Expanse"},"That 70s Show"), undefined);
  });

  it('Returns key when given number value' , () => {
    assert.strictEqual(findKeyByValue({apples: 3, oranges: 5, bananas: 43}, 43), "bananas");
  });

  it('Returns key when given boolean value' , () => {
    assert.strictEqual(findKeyByValue({ green: false, orange: true, red: false}, true), "orange");
  });

  it('Returns first key that matches value' , () => {
    assert.strictEqual(findKeyByValue({ green: false, orange: true, red: false, yellow: true}, true), "orange");
  });
});