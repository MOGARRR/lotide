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

module.exports = countLetters;