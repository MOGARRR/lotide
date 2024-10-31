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

// test cases
const coffee1 = {
  brew: 'pour over',
  roast:'light',
  size:'large',
  flavors:['fruity','floral']
};

const coffee2 = {
  size: 'small',
  roast: 'dark',
  flavors: ['nutty','sweet']
  
};
const coffee3 = {
  roast:'light',
  size: 'large',
  flavors: ['fruity','sour']
};
const coffee4 = {
  roast: 'dark',
  flavors: ['nutty','sweet'],
  size : 'small'
};
const coffee5 = {
  size:'large',
  flavors:['fruity','floral'],
  brew: 'pour over',
  roast:'light'
};


assertEqual(eqObjects(coffee1,coffee2),false);
assertEqual(eqObjects(coffee2,coffee4),true);
assertEqual(eqObjects(coffee1,coffee3), false);
assertEqual(eqObjects(coffee1,coffee5), true);

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2, c: 3 };

assertEqual(eqObjects(obj1,obj2),false);
