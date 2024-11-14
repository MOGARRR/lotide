const tail = function(array) {
  if (array.length === 1 ||0){
    return [];
  }
  let tail = array.splice();
  tail.shift();
  return tail;
};
module.exports = tail;