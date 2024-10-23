const assertEqual = function(actual,expected) {
  return console.log(actual === expected ? `🟢🟢🟢 Assertion Passed: [${actual}] === [${expected}]`
    : `🟥🟥🟥 Assertion Failed: [${actual}] !== [${expected}]`);
};

const head = function(array) {
  return array[0];
};
assertEqual(head([1,2,3,4,5]),1);
assertEqual(head(['hi','bye','hey']),'hi');
assertEqual(head([true,false]),true);
assertEqual(head([]),undefined);
assertEqual(head([1]),1);