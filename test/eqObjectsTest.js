const eqObjects = require('../eqObjects');
const assert = require('chai').assert;
describe('#eqObjects', () => {
  it('Returns true for matching objects' , () => {
    assert.equal(eqObjects({a:1,b:2,c:3},{a:1,b:2,c:3}),true);
  });

  it('Returns false for different objects' , () => {
    assert.equal(eqObjects({a:1,b:2,c:3},{a:1,b:2,f:7}),false);
  });

  it('Works with multiple data types' , () => {
    assert.equal(eqObjects({a:true,b:"apple",c:34,array:[1,2,3]},{a:true,b:"apple",c:34,array:[1,2,3]}),true);
  });

  it('Works with nested objects' , () => {
    assert.equal(eqObjects({a:1,b:2,c:{realC:3}},{a:1,b:2,c:{realC:3}}),true);
  });

});