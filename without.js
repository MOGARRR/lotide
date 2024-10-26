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

const without = function(source,itemsToRemove){
  const clone = [];
  for(let ele of source){
    if (itemsToRemove.includes(ele) === false){
      let push = ele;
      clone.push(ele);
    }
  }
return clone;
};

assertArraysEqual(without([1,2,3],[2]),[1,3]);
assertArraysEqual(without(['a','b','c'],['a']),['b','c']);
assertArraysEqual(without([1,'b',2,3],[3,'b']),[1,2]);

//Test to make source array isnt modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);