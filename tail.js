const assertEqual = function(actual,expected) {
  return actual === expected ? `🟢🟢🟢 Assertion Passed: [${actual}] === [${expected}]`
    : `🟥🟥🟥 Assertion Failed: [${actual}] !== [${expected}]`;
};

const tail = function(array) {
  let tail = array.map((x) => x);
  if(tail.length === 0){
    return array;
  }
  tail.shift();
  return tail;
};
const test1 = [1,2,3];
const temp2 = ['hi','bye','sigh'];
const test3 = [];
const test4 = [1];

console.log(assertEqual(tail(test1)[0],2));
console.log(assertEqual(tail(test1)[1],3));
console.log(assertEqual(tail(test1).length,test1.length -1));
console.log(test1);
console.log('--1--');
console.log(assertEqual(tail(temp2)[0],'bye'));
console.log(assertEqual(tail(temp2)[1],'sigh'));
console.log(assertEqual(tail(temp2).length,temp2.length -1));
console.log(temp2);
console.log('--2--');
console.log(assertEqual(tail(test3).length,0));
console.log('--3--');
console.log(assertEqual(tail(test4).length,0));
console.log('--4--');