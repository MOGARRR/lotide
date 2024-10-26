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

assertEqualArray([1,2,3],[1,2,3]);
assertEqualArray([1,2,3],[1,2,2]);
assertEqualArray([1,2,3],[1,2,3,4]);
assertEqualArray(['1','2','3'],['1','2','3']);
assertEqualArray(['1','2','3'],['1','2','4']);
assertEqualArray(['1','2','3'],['1',2,'3']);
assertEqualArray([1],[1]);
assertEqualArray([],[]);



