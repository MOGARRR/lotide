const without = function(source,itemsToRemove) {
  const clone = []; //to leave source array untouched
  for (let ele of source) {
    if (itemsToRemove.includes(ele) === false) { // if item is in itemsToRemove array its pushed into the clone
      clone.push(ele);
    }
  }
  return clone;
};
module.exports = without;