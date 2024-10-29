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



const letterPositions = function(sentence){
  const result = {}
  let splitSentence = sentence.split('');
  for (let index in splitSentence){
    if (splitSentence[index] !== ' ')
      result.hasOwnProperty(splitSentence[index]) ? result[splitSentence[index]].push(parseInt(index)) : result[splitSentence[index]] = [parseInt(index)]; 
  } 
  return result;
};

assertArraysEqual(letterPositions('hello').l,[2,3]);
assertArraysEqual(letterPositions('Lighthouse Labs').L,[0,11]);
assertArraysEqual(letterPositions('Random words to think of').o,[4,8,14,22]);
