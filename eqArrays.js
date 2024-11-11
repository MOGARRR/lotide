const assertEqual = function(actual,expected) {
  return console.log(actual === expected ? `🟢🟢🟢 Assertion Passed: [${actual}] === [${expected}]`
    : `🟥🟥🟥 Assertion Failed: [${actual}] !== [${expected}]`);
};

const eqArrays = function(array1,array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let ele in array1) {
    if (Array.isArray(array1[ele])) {
      if (eqArrays(array1[ele],array2[ele]) !== true) {
        return false;
      }
    } else {
      if (array1[ele] !== array2[ele]) {
        return false;
      }
    }
   
  }
  return true;
};

assertEqual(eqArrays([1,2,3],[1,2,3]),true);
assertEqual(eqArrays(['hi','bye','sigh'],['hi','bye','sigh']),true);
assertEqual(eqArrays([4,1,2,3],[1,2,4]),false);
assertEqual(eqArrays([1,2,3],[1,2,2]),false);
assertEqual(eqArrays(['hi','bye','sigh'],['hi','bye','my']),false);
assertEqual(eqArrays([],[]),true);
assertEqual(eqArrays([1],[1]),true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]),true); // true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]),false); // false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]),false); // false