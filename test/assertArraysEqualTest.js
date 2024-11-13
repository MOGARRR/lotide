const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1,2,3],[1,2,3]);// true when equal
assertArraysEqual([1,2,3],[1,2,2]);// false when not equal
assertArraysEqual([1,2,3],[1,2,3,4]);
assertArraysEqual(['1','2','3'],['1','2','3']); // works with str
assertArraysEqual(['1','2','3'],['1','2','4']);
assertArraysEqual([true,false,false],[true,false,false]);// works with booleans
assertArraysEqual([true,false,false],[true,false,true]);
assertArraysEqual(['1','2','3'],['1',2,'3']); // strict equal
assertArraysEqual([1],[1]);// works with single values
assertArraysEqual([],[]);// works with empty