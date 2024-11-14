const letterPositions = function(sentence) {
  const result = {};
  const splitSentence = sentence.split('');
  for (let index in splitSentence) {
    if (splitSentence[index] !== ' ') {
      result[splitSentence[index]] ? result[splitSentence[index]].push(parseInt(index)) : result[splitSentence[index]] = [parseInt(index)];
    }
  }
  return result;
};
module.exports = letterPositions;