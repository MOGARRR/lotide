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

const assertEqualArray = function(array1,array2){
  let condition = eqArrays(array1,array2);
  return console.log( condition ? `🟢🟢🟢 Arrays are equal: [${array1}] === [${array2}]`
    : `🟥🟥🟥 Arrays are not equal: [${array1}] !== [${array2}]`);
};

const middle = function(array){
  let middle = [];
  let half = 0;
  if(array.length < 3){
    return middle;
  }
  if(array.length % 2 === 0){
    // to account for 0 index, minus half result by one. 
    half = array.length / 2 - 1;
    middle.push(array[half]);
    half ++;
    middle.push(array[half]);
    return middle;
  } else {
    half = (array.length - 1 ) / 2;
    middle.push(array[half]);
    return middle;
  }
};

assertEqualArray(middle([1,2,3,4,5,6]),[3,4]);
assertEqualArray(middle([1,2,3,4,5,6,7]),[4]);
assertEqualArray(middle([1,2]),[]);
assertEqualArray(middle([1]),[]);
assertEqualArray(middle([]),[]);


