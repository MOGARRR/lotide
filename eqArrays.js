const eqArrays = function(array1,array2) {

  if (array1.length !== array2.length) {
    return false;
  }
  // compares the values between arrays for anything falsy
  // if value is an array it will call the function again with the values inside
  for (let ele in array1) {
    if (Array.isArray(array1[ele])) {
      if (!eqArrays(array1[ele],array2[ele])) {
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
module.exports = eqArrays;