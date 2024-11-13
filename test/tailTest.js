const assertEqual = require('../assertEqual');
const tail = require('../tail');

const test1 = [1,2,3];
const temp2 = ['hi','bye','sigh'];
const test3 = [];
const test4 = [1];

assertEqual(tail(test1)[0],2);
assertEqual(tail(test1)[1],3);
assertEqual(tail(test1).length,test1.length - 1);
console.log(test1);
console.log('--1--');

assertEqual(tail(temp2)[0],'bye');
assertEqual(tail(temp2)[1],'sigh');
assertEqual(tail(temp2).length,temp2.length - 1);
console.log(temp2);
console.log('--2--');

assertEqual(tail(test3).length,0);
console.log('--3--');

assertEqual(tail(test4).length,0);
console.log('--4--');