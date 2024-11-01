const eqArrays = function(array1,array2){
  if(array1.length !== array2.length){
    return false;
  }
  for(let ele in array1){
    if(array1[ele] !== array2[ele]){
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1,array2){
  let condition = eqArrays(array1,array2);
  return console.log( condition ? `🟢🟢🟢 Arrays are equal: [${array1}] === [${array2}]`
    : `🟥🟥🟥 Arrays are not equal: [${array1}] !== [${array2}]`);
};



const takeUntil = (array,callback) => {
  const newArray = [];
  for (let item of array) {
    if(callback(item)) {
      return newArray;
    } else {
      newArray.push(item);
    }
  }
  return newArray;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1,[1,2,5,7,2]);
console.log('------');
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);