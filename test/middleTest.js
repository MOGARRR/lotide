const assestArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assestArraysEqual(middle([1,2,3,4,5,6]),[3,4]);
assestArraysEqual(middle([1,2,3,4,5,6,7]),[4]);
assestArraysEqual(middle([1,2]),[]);
assestArraysEqual(middle([1]),[]);
assestArraysEqual(middle([]),[]);
