const countOnly = require('../countOnly');
const assert = require('chai').assert;
describe('#countOnly', () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
  ];
  const result1 = countOnly(firstNames, {
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false,
  });

  it('Returns 1 for when item occurs once' , () => {
    assert.strictEqual(result1["Jason"],1);
  });

  it('Returns 2 when item appears twice' , () => {
    assert.strictEqual(result1["Fang"],2);
  });
  it('Returns undefined when item is false' , () => {
    assert.strictEqual(result1["Agouhanna"],undefined);
  });
});