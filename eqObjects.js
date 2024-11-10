//imported functions
const assertEqual = function(actual,expected) {
  return console.log(actual === expected ? `🟢🟢🟢 Assertion Passed: [${actual}] === [${expected}]`
    : `🟥🟥🟥 Assertion Failed: [${actual}] !== [${expected}]`);
};

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

//current function
const eqObjects = function(obj1,obj2) {
  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();
  if (eqArrays(keys1,keys2) !== true) {
    return false;
  }
  for (let key of keys1) {
    if (typeof(obj1[key]) === 'object') {
      if (Array.isArray(obj1[key])) {
        if (eqArrays(obj1[key], obj2[key]) !== true) {
          return false;
        }
      } else if (eqObjects(obj1[key],obj2[key]) !== true) {
        return false;
      }
    } else {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
};
// test cases
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),true); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),false); // => false
assertEqual(eqObjects({ a: { z: {s:{n:1}} , h : {a: 2}}, b: {d:2} },{ a: { z: {s:{n:1}} , h : {a: 2}}, b: {d:2} }),true); // => true
