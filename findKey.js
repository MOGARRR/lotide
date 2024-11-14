const findKey = (obj,callback) => {

  //get the keys of the object as an array
  const objKeys = Object.keys(obj);
  //loop through object keys
  for (const keys in objKeys) {
    //get name of current element in array which acts as the key
    const keyName = objKeys[keys];
    // use the key to access value in the object
    const objValue = obj[keyName];
    // use if to see if the value is true for the callback
    if (callback(objValue)){
      //if it is return the key form earlier to the empty variable at the start
      return keyName;
    }
  }
}

module.exports = findKey;
