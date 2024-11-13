const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1,array2) {
  let condition = eqArrays(array1,array2);
  return console.log(condition ? `🟢🟢🟢 Arrays are equal: [${array1}] === [${array2}]`
    : `🟥🟥🟥 Arrays are not equal: [${array1}] !== [${array2}]`);
};

module.exports = assertArraysEqual;


