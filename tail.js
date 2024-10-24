const assertEqual = function(actual,expected) {
  return console.log(actual === expected ? `🟢🟢🟢 Assertion Passed: [${actual}] === [${expected}]`
    : `🟥🟥🟥 Assertion Failed: [${actual}] !== [${expected}]`);
};

const tail = function(array) {
  let tail = array.map((x) => x);
  tail.shift();
  return tail;
};
const temp1 = [1,2,3];
const temp2 = ['hi','bye','sigh'];

console.log(assertEqual(tail(temp1)[0],2));
console.log(assertEqual(tail(temp1)[1],3));
console.log(temp1);
console.log(assertEqual(tail(temp2)[0],'bye'));
console.log(assertEqual(tail(temp2)[1],'sigh'));
console.log(temp2);