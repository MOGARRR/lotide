const assertEqual = function(actual,expected) {
  return console.log(actual === expected ? `🟢🟢🟢 Assertion Passed: [${actual}] === [${expected}]`
    : `🟥🟥🟥 Assertion Failed: [${actual}] !== [${expected}]`);
};

const countLetters = function(str){
  const totalLetters ={};
  let split = str.split("");
  for(let letters of split){
    if (letters !== " "){
      totalLetters.hasOwnProperty(letters) ? totalLetters[letters] += 1 : totalLetters[letters] = 1;
    }
  }
  return totalLetters;
};

console.table(countLetters("LHL"));
console.table(countLetters("Hello World"));
console.table(countLetters("lighthouse in the house"));