const assertEqual = function(actual,expected) {
  return console.log(actual === expected ? `🟢🟢🟢 Assertion Passed: [${actual}] === [${expected}]`
    : `🟥🟥🟥 Assertion Failed: [${actual}] !== [${expected}]`);
};

const findKey = (obj,callback) => {
  let key;
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
      return key = keyName;
    }
  }
  return key;
}


 const result1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
)

const result2 = findKey(
  {
    wine: { alcohol: true },
    beer: { alcohol: true },
    "apple juice": { alcohol: false },
    rum: { alcohol: true },
    whiskey: { alcohol: true },
    water: {alcohol: false}
  },
  (x) => x.alcohol === false
);

const result3 = findKey(
  {
    crayon1: { color: 'red' },
    crayon2: { color: 'blue' },
    crayon3: { color: 'yellow' },
    crayon4: { color: 'purple' },
    crayon5: { color: 'green' },
  },
  (x) => x.color === 'green'
);

const result4 = findKey(
  {
    alice: { age: 23 },
    john: { age: 34 },
    mark: { age: 19 },
    sarah: { age: 31 },
    heather: { age: 12 },
  },
  (x) => x.age > 60
);




assertEqual(result1,'noma');
assertEqual(result2,'apple juice');
assertEqual(result3,'crayon5');
assertEqual(result4,undefined);