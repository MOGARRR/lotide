const findKey = (obj,callback) => {
  const objKeys = Object.keys(obj);
  for (const keys in objKeys) { //loops through array of object keys
    const keyName = objKeys[keys];
    const objValue = obj[keyName];//use keyname to get value from object
    if (callback(objValue)){ // if the call back is true it returns the keyname
      return keyName;
    }
  }
}

module.exports = findKey;
