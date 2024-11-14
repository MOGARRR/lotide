const assertObjectsEqual = function(actual,expected) {
  const inspect = require("util").inspect;
  return console.log(actual === expected ? `🟢🟢🟢 Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`
    : `🟥🟥🟥 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
};
module.exports = assertObjectsEqual;