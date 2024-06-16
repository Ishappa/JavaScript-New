"use strict";

let arr1 = [2, 2, 6, 5, 8];
let arr2 = [6, 8, 9, 12];

//filter method use for based on condition get the output
const result = arr1.filter((e) => e > 2);
console.log(...result, ...arr2); // here instead of using we can use spread operator

//reduce method
const sum = arr2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); //35

//Map method it returns the boolean
const x = arr2.map((e) => {
  return e * 2;
});
console.log(x);
console.log(...x);

// for (let ele of arr1) {
//   console.log(ele);
// }

//create a random number
let randomNumber = Math.trunc(Math.random() * 255 + 1); //if we not not use +1 for formula it will genrate below 255
console.log(`Random number is generating here: ${randomNumber}`);

//creating random rgba color

let randomInt = (min, max) => {
  return Math.trunc(Math.random()) * (max - min + 1 + min);
};

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

console.log(randomColor);
