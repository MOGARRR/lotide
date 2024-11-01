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


const map = (array,callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const mapArray1 = map(['fish','cat','dog','lion','bird','monkey'], (animal) => animal[1]);
const mapArray2 = map([1,2,3,4,5,6], (num) => num * 3);
const mapArray3 = map(['1','2','3','4','5'], (str) => parseInt(str));

assertArraysEqual(mapArray1,['i','a','o','i','i','o']);
assertArraysEqual(mapArray2,[3,6,9,12,15,18]);
assertArraysEqual(mapArray3,[1,2,3,4,5]);