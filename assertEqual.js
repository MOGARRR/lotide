const assertEqual = function(actual,expected) {
  return console.log(actual === expected ? `🟢🟢🟢 Assertion Passed: "${actual}" === "${expected}"`
    : `🟥🟥🟥 Assertion Failed: "${actual}" !== "${expected}"`);
};

module.exports = assertEqual;