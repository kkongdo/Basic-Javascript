'use strict';

// Array

// 1. Declaration

const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // last element

// 3. Looping over an array
// print all fruits
// a. for
console.clear();
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits){
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('peach', 'orange');

// pop: remove an item from the end
fruits.pop();
console.log(fruits);   

// unshift: add an item to the beginning
fruits.unshift('peach', 'orange');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push  

// splice: remove an item by index position
fruits.push('peach', 'orange', 'lemon');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'grape', 'watermelon');
console.log(fruits);

// combine two arrays
const fruits2 = ['coconut', 'melon'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));
console.log(fruits.indexOf('lemon'));

// includes
console.log(fruits.includes('apple'));
console.log(fruits.includes('watermelon'));

// lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits);

console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));
console.log(fruits.lastIndexOf('watermelon'));

// Path: array.js
// Compare this snippet from object.js:
// }

// 6. forEach
// fruits.forEach(function(fruit, index, array){
//     console.log(fruit, index, array);
// });

// fruits.forEach((fruit, index) => console.log(fruit, index));

// 7. map
// const result = fruits.map((fruit) => fruit);
// console.log(result);

// 8. filter

// const result = fruits.filter((fruit) => fruit.length > 5);
// console.log(result);

// 9. reduce
// const result = fruits.reduce((acc, cur) => acc + cur);

