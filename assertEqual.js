const assertEqual = function(actual,expected) {
  return actual === expected ? `🟢🟢🟢 Assertion Passed: [${actual}] === [${expected}]`
    : `🟥🟥🟥 Assertion Failed: [${actual}] !== [${expected}]`;
};
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual('hi','hi'));
console.log(assertEqual(321, 123));