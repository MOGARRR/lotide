const tail = function(array) {
  if (array.length === 1 ||0){
    return [];
  }
  array.shift();
  return array;
};
module.exports = tail;