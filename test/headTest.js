const assert = require('chai').assert;
const head = require('../head');

describe('#head', () => {
  it('returns 1 for [1,2,3]', () => {
    assert.strictEqual(head([1,2,3]),1);
  });
  it('returns "5" for ["5"]', () =>{
    assert.strictEqual(head(['5']),'5');
  });
  it("returns 'hi' for ['hi','bye','hey']", () =>{
    assert.strictEqual(head(['hi','bye','hey']),'hi');
  });
  it("returns true for [true,false]", () =>{
    assert.strictEqual(head([true,false]),true);
  });
  it("returns 1 for [1]", () =>{
    assert.strictEqual(head([1]),1);
  });
  it("returns undefined for empty array", () =>{
    assert.strictEqual(head([]),undefined);
  });
});