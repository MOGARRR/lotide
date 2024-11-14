const flatten = function(array) {
  let newArray = [];
  for (let ele of array) {
    if (Array.isArray(ele)) {
      for (let item of ele) {
        newArray.push(item);
      }
    } else {
      newArray.push(ele);
    }
  }
  return newArray;
};

module.exports = flatten;