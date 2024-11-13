const tail = function(array) {
  let tail = array.slice();
  tail.shift();
  return tail;
};

module.exports = tail;