const middle = function(array) {
  let middle = [];
  let half = 0;
  if (array.length < 3) {
    return middle;
  }
  //if array is even it will return the two values from the middle
  if (array.length % 2 === 0) {
    // to account for 0 index, minus half result by one
    half = array.length / 2 - 1;
    middle.push(array[half]);
    half ++;
    middle.push(array[half]);
    return middle;
  } else { // if the array is odd it will just return the one value
    half = (array.length - 1) / 2;
    middle.push(array[half]);
    return middle;
  }
};

module.exports = middle;

