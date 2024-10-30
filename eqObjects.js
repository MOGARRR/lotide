const assertEqual = function(actual,expected) {
  return console.log(actual === expected ? `🟢🟢🟢 Assertion Passed: [${actual}] === [${expected}]`
    : `🟥🟥🟥 Assertion Failed: [${actual}] !== [${expected}]`);
};

const eqObjects = function(obj1,obj2){
  for( const keys1 in obj1){
    let value1 = obj1[keys1];
    if(obj2[keys1] !== value1){
      return false;
    }
  }
  return true;
};

const coffee1 = {
  roast:'light',
  size:'large',
  brew: 'pour over'
}

const coffee2 = {
  roast: 'dark',
  size: 'small'
}
const coffee3 ={
  roast:'light',
  size: 'large',
}
const coffee4 ={
  roast: 'dark',
  size : 'small'
}


assertEqual(eqObjects(coffee1,coffee2),false);
assertEqual(eqObjects(coffee2,coffee4),true);
assertEqual(eqObjects(coffee1,coffee3), false);

