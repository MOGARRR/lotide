const findKeyByValue = function(obj,value) {
  for (let key in obj) {
    const keyValue = obj[key];
    if (keyValue === value) {
      return key;
    }
  }
};
module.exports = findKeyByValue;