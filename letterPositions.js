const letterPositions = function(sentence) {
  const result = {};
  const splitSentence = sentence.split('');
  for (let index in splitSentence) { // if the object has the key it will add index to it, if it doesnt it will create a key with a array and index inside 
      result[splitSentence[index]] ? result[splitSentence[index]].push(parseInt(index)) : result[splitSentence[index]] = [parseInt(index)];
  }
  return result;
};
module.exports = letterPositions;