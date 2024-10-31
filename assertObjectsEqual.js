// imported function
const eqArrays = function(array1,array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let ele in array1) {
    if (array1[ele] !== array2[ele]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(obj1,obj2) {
  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();
  if (eqArrays(keys1,keys2) !== true) {
    return false;
  }
  for (let key of keys1) {
    if (Array.isArray(obj1[key])) {
      if (eqArrays(obj1[key],obj2[key])) {
        continue;
      } else {
        return false;
      }
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};
//

//current function
const assertObjectsEqual = function(actual,expected){
  const inspect = require("util").inspect;
  return console.log(inspect(actual) === inspect(expected) ? `🟢🟢🟢 Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`
    : `🟥🟥🟥 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
};
//

// test cases

const objA = { a: '1', b: 2 }
const objB = { b: 2, a: '1' }
const objC = { c: 2, a: '1' }

assertObjectsEqual(objA,objA);
assertObjectsEqual(objA,objB);
assertObjectsEqual(objB,objC);
assertObjectsEqual(objC,objC);


