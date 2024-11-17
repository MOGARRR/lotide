# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @mogar/lotide`

**Require it:**

`const _ = require('@mogar/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertEqual(actual,expected)`: Compares if two values match and returns a string stating if the assertion passed or failed.
- `assertArraysEqual(array1,array2)`: Compares if two arrays match and returns a string stating if they are equal or not.
- `assertObjectEqual(actual,expected)`: Compares if two objects match and returns a string stating if the assertion passed or failed.
- `eqArrays(array1,array2)`: Compares if two arrays match returns true if they do and false if they dont. Able to handle nest arrays.
- `eqObjects(obj1,obj2)`: Compares if two objects match returns true if they do and false if they dont. Able to handle nest objects.
- `countLetters(str)`: Takes a string and returns an object with the letters as keys and value being the number of times they had occured.
- `countOnly(allItems,itemsToCount)`: Takes an array and object, returning a new object. The object contains all the array values that match the object and the value being the number of times they had occured. 
- `findKey(obj,callback)`: Takes an object and callback function, returning the first object key that returns true from callback. 
- `findKeyByValue(obj,value)`: Takes an object and value, returning the first object key that matches the given value.
- `flatten(array)`: Takes an array with nested values and returns a new single nested array with nested values.
- `head(array)`: Takes an array and returns the first value in the array.
- `letterPositions(sentence)`: Takes a string and returns an object with the keys of the letters, and a array of all the indexes where they occured.
- `map(array,callback)`: Takes an array and callback function, returning a new array with the return value of each element being passed through callback.
- `middle(array)`: Takes an array and returns the value of the middle index. If array is even, it will return the two values adjacent to the middle. 
- `tail(array)`: Takes an array and returns a new array with all the values except the first element.
- `takeUntil(array,callback)`: Takes an array and callback function, returning a new array of all the values that appeared prior to value that returns true when passed in call back.
- `without(source,itemsToRemove )`: Takes a source array and a array of itemstToRemove, returning a new array of all the values in source array that were not in itemsToRemove array.