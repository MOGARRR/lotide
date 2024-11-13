const assertEqual = require('../assertEqual');
const head = require('../head');
assertEqual(head([1,2,3,4,5]),1);
assertEqual(head(['hi','bye','hey']),'hi');
assertEqual(head([true,false]),true);
assertEqual(head([]),undefined);
assertEqual(head([1]),1);