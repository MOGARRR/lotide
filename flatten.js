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

const flatten = function(array){
  let newArray = [];
  for(let ele of array){
    if(Array.isArray(ele) === true){
      for(let item of ele){
        newArray.push(item);
      }
    }else{
      newArray.push(ele);
    }
  }
  return newArray;
};

assertEqualArray(flatten([1,2,[3,4],5,6]),[1,2,3,4,5,6]);
assertEqualArray(flatten([1,2,[3,4,5,6]]),[1,2,3,4,5,6]);
assertEqualArray(flatten([1,2,['a','b'],5,6]),[1,2,'a','b',5,6]);
assertEqualArray(flatten([[1,2,3,4,5,6]]),[1,2,3,4,5,6]);
assertEqualArray(flatten([['a','b'],['c','d'],['e','f']]),['a','b','c','d','e','f']);
assertEqualArray(flatten([]),[]);