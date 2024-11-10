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
  const value1 = Object.values(obj1).sort();
  const keys2 = Object.keys(obj2).sort();
  const value2 =  Object.values(obj2).sort();

  if (eqArrays(keys1,keys2) !== true) {
    return false;
  };

  for (let item in value1){
    if (typeof(value1[item]) === 'object'){
      if(Array.isArray(value1[item])){
        if (eqArrays(value1[item], value2[item]) !== true){
          return false;
        }
      }
      if(eqObjects(value1[item],value2[item]) !== true) {
        return false;
      }
    } else {
      if (value1[item] !== value2[item]){
        return false;
      }
    };
  };
  return true;
};
// test cases
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),true); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),false); // => false
assertEqual(eqObjects({ a: { z: {s:{n:1}} , h : {a: 2}}, b: {d:2} },{ a: { z: {s:{n:1}} , h : {a: 2}}, b: {d:2} }),true); // => true
