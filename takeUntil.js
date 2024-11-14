const takeUntil = (array,callback) => {
  const newArray = [];
  for (let item of array) { //adds item to array,if callback returns true with item it will return the array
    if (callback(item)) {
      return newArray;
    } else {
      newArray.push(item);
    }
  }
  return newArray;
};

module.exports = takeUntil;