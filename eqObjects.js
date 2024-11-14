const eqArrays = require('./eqArrays');
const eqObjects = function(obj1,obj2) {
  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();
  if (eqArrays(keys1,keys2) !== true) { // if array of keys arent the same itll return false
    return false;
  }
  for (let key of keys1) {
    if (typeof(obj1[key]) === 'object') { // checks if its an object or array
      if (Array.isArray(obj1[key])) {
        if (eqArrays(obj1[key], obj2[key]) !== true) { // uses imported eqarray to check if array is equal
          return false;
        }
      } else if (eqObjects(obj1[key],obj2[key]) !== true) { // calls function again to handle nested objects
        return false;
      }
    } else {
      if (obj1[key] !== obj2[key]) { // compares values of key between objects
        return false;
      }
    }
  }
  return true;
};
module.exports = eqObjects;