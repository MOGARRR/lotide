//imported functions
const assertEqual = function(actual,expected) {
  return console.log(actual === expected ? `🟢🟢🟢 Assertion Passed: [${actual}] === [${expected}]`
    : `🟥🟥🟥 Assertion Failed: [${actual}] !== [${expected}]`);
};

const eqArrays = function(array1,array2){
  if(array1.length !== array2.length){
    return false;
  }
  for(let ele in array1){
    if(array1[ele] !== array2[ele]){
      return false;
    }
  }
  return true;
};

//current function
const eqObjects = function(obj1,obj2){
  for( const keys1 in obj1){
    let value1 = obj1[keys1];
    if (Array.isArray(value1)){
      if (eqArrays(value1,obj2[keys1]) !== true){
        return false;
      }else{
        continue;
      }
    }
    if(obj2[keys1] !== value1){
      return false;
    }
  }
  return true;
};

// test cases
const coffee1 = {
  brew: 'pour over',
  roast:'light',
  size:'large',
  flavors:['fruity','floral']
}

const coffee2 = {
  size: 'small',
  roast: 'dark',
  flavors: ['nutty','sweet']
  
}
const coffee3 ={
  roast:'light',
  size: 'large',
  flavors: ['fruity','sour']
}
const coffee4 ={
  roast: 'dark',
  size : 'small',
  flavors: ['nutty','sweet']
}


assertEqual(eqObjects(coffee1,coffee2),false);
assertEqual(eqObjects(coffee2,coffee4),true);
assertEqual(eqObjects(coffee1,coffee3), false);

