const assertEqual = function(actual,expected) {
  return console.log(actual === expected ? `🟢🟢🟢 Assertion Passed: [${actual}] === [${expected}]`
    : `🟥🟥🟥 Assertion Failed: [${actual}] !== [${expected}]`);
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  animated: "Arcane",

};
const findKeyByValue = function(obj,value){
  for (let key in obj){
    let keyValue = obj[key];
    if(keyValue === value){
      let objKey = key;
      return objKey;
    }
  }
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Psych"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Arcane"),"animated");