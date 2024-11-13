const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1,2,3],[1,2,3]),true);
assertEqual(eqArrays(['hi','bye','sigh'],['hi','bye','sigh']),true);//works with str
assertEqual(eqArrays([4,1,2,3],[1,2,4]),false);//returns false when not equal
assertEqual(eqArrays([1,2,3],[1,2,2]),false); // wotks with booleans
assertEqual(eqArrays([true,false,false],[true,false,false]),true);
assertEqual(eqArrays(['hi','bye','sigh'],['hi','bye','my']),false);
assertEqual(eqArrays([],[]),true);// works with empty arrays
assertEqual(eqArrays([1],[1]),true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]),true); // works with nested arrays
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]),false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]),false);
assertEqual(eqArrays([[2, 3], ['4',[false]]], [[2, 3], ['4',[false]]]),true);
