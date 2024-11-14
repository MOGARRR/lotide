const countLetters = function(str) {
  const totalLetters = {};
  let split = str.toLowerCase().split("");
  for (let letters of split) {
    if (letters !== " ") {
      totalLetters[letters] > 0 ? totalLetters[letters] += 1 : totalLetters[letters] = 1;
    }
  }
  return totalLetters;
};
module.exports = countLetters;