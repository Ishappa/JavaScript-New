"use strict";

let arr1 = [2, 2, 6, 5, 8];
let arr2 = [6, 8, 9, 12];

//-----------------filter method use for based on condition get the output-----------------
const result = arr1.filter((e) => e > 2);
console.log(...result, ...arr2); // here instead of using we can use spread operator

//---------------------reduce method-------------------
const sum = arr2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); //35

//-------------------Map method it returns the boolean-----------------
const x = arr2.map((e) => {
  return e * 2;
});
console.log(x);
console.log(...x);

// for (let ele of arr1) {
//   console.log(ele);
// }


// --------------slice() using ---------------------
// The slice() method in JavaScript is used to extract a portion of an array into a new array without modifying the original array.

let array = ["Hello", "Hi", "Welcome", "Goodbye"];

// Extracting elements from index 1 to 3 (not including 3)
let slicedArray = array.slice(1, 3);

console.log(array);// Output: ["Hello", "Hi", "Welcome", "Goodbye"] (original array remains unchanged) 
console.log(slicedArray);// Output: ["Hi", "Welcome"]



// --------------------Splice method usage--------------------------
// The splice() method in JavaScript is used to add or remove elements from an array. Unlike slice(), it modifies the original array.

//-------------example 1: Removing elements-------------------

let array1 = ["Hello", "Hi", "Welcome", "Goodbye"];

// Removing 2 elements starting from index 1
let removedElements = array1.splice(1, 2);

console.log(array1);            // Output: ["Hello", "Goodbye"]
console.log(removedElements);  // Output: ["Hi", "Welcome"] (removed elements)



//----------example 2: Adding elements-------------------

let array2 = ["Hello", "Goodbye"];

// Adding 2 elements at index 1
array2.splice(1, 0, "Hi", "Welcome");

console.log(array2); // Output: ["Hello", "Hi", "Welcome", "Goodbye"]

// 1: This is the start index where the new elements will be inserted. In this case, elements will be inserted at index 1, which is the position after "Hello".
// 0: This is the deleteCount, specifying the number of elements to remove starting from the start index. Since it is 0, no elements will be removed from the array.




//----------example 2: Replacng elements-------------------

let array3 = ["Hello", "Hi", "Welcome", "Goodbye"];

// Replacing 2 elements at index 1 with new elements
array3.splice(1, 2, "Hey", "See you");

console.log(array3); // Output: ["Hello", "Hey", "See you", "Goodbye"]



//-----------------------create a random number-------------------------
//-----------if we not not use +1 for formula it will genrate below 255

let randomNumber = Math.trunc(Math.random() * 255 + 1); 
console.log(`Random number is generating here: ${randomNumber}`);



//------------------------creating random rgba color---------------------------

let randomInt = (min, max) => {
  return Math.trunc(Math.random()) * (max - min + 1 + min);
};

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

console.log(randomColor);


let number = Math.trunc(Math.random()*100+1);
console.log(`custom random number : ${number}`);