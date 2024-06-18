'use strict';

const weekdays = ['Mon', 'Tue', 'Wed', 'thu', 'Fri', 'Sat'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },

  // [`days-${2+4}`]: {
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enahanced objects literal==============================
  openingHours,

  // we can write like this also without the colon and without function keywords
  // order(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order Recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to ${address} at ${time}}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is a delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};
// const a = 'hello world';
// const b = 'hello';

// console.log(a[1]);
// console.log('hello'.length);
// console.log('hello'[0]);
// console.log(a.indexOf('o'));
// console.log(b.lastIndexOf('l'));
// console.log(b.slice(2));
// console.log(b.slice(2, 4));
// console.log(a.slice(a.lastIndexOf('o')));
// console.log(b.slice(-2)); //last 2 letters
// console.log(b.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);

//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat 😬');
//   } else {
//     console.log('You got lucky 😎');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));

const person = 'iSh';
const personLower = person.toLowerCase(); //ish
const validName =
  personLower[0].toUpperCase() + personLower.slice(1).toLowerCase();

console.log(validName);

const mail = 'hello@email.com';
const mailSecond = ' Hello@email.com';
const lowerEmail = mailSecond.toLowerCase().trim(); //
if (mail === lowerEmail) {
  console.log('Email is valid');
} else {
  console.log('Email is not valid');
}

const price = '5.640$';
const rupees = price.replace('$', 'Rs').replace('.', ',');
console.log(rupees);

const charCheck = price.includes('4');
console.log(charCheck);

const checkBaggage = function (items) {
  const notValidItems = items.includes('knife') || items.includes('gun');

  if (notValidItems) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('i am travelling with laptop , charger and knife');
checkBaggage('i am travelling with chocolate and cloths');

// //-----------------------for of loop-------------------------------------------

let nameOne = 'hello joy';
nameOne = nameOne.split(' ');
console.log(nameOne);

let nameTwo = ['hi', 'nagi'];
nameTwo = nameTwo.join(' ');

console.log(nameTwo);

let array = [1, 2, 3, 4, 5];

// Syntax: array.slice(start, end)
let newArray = array.slice(1, 3); // From index 1 to index 3 (not including index 3)
console.log(newArray); // Output: [2, 3]
console.log(array); // Original array remains unchanged: [1, 2, 3, 4, 5]

let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
let citrus = fruits.slice(1, 3); // ["Banana", "Cherry"]
console.log(citrus); // Output: ["Banana", "Cherry"]

let letters = ['a', 'b', 'c', 'd', 'e'];
let lastTwo = letters.slice(-2); // ["d", "e"]
console.log(lastTwo); // Output: ["d", "e"]

let greeting = 'Hello, world!';
let world = greeting.slice(7, 12);
console.log(world); // Output: "world"

const creditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
creditCard(61365864);
console.log(creditCard(61365864)); //*****5864 */

let str = 'Hello, world!';

console.log(str.substring(-5, 5)); // Output: "Hello"
console.log(str.slice(-5, -1)); // Output: "orld"

// nameTwo = nameTwo.slice(' ');

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// const menu2 = [restaurant.starterMenu, restaurant.mainMenu];

// console.log(menu2);
// console.log(menu);

// for (const list of menu) {
//   console.log(list);
// }

// // for (const list of menu.entries()) {
// //   // console.log(list);
// //   console.log(`${list[0] + 1}: ${list[1]}`);
// // }

// for (const [i, ele] of menu.entries()) {
//   console.log(`${i + 1}: ${ele}`);
// }

// restaurant.orderPizza('onion', 'spinach', 'paneer', 'mushroom');

// //---------------------Destructuring---------------------------

// // using spread operator on right side for varibales separated by cammos
// const arr = [1, 2, ...[3, 4]];

// //REST, because of left side (use for varibles separted by cammas)
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , Risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, Risotto, otherFood);

// //objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //--------------------Functions-----------------------
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 6, 7, 8);
// add(9, 12, 11, 15, 13, 16);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Bengaluru, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// =====================using spread operator=====================
// const newArr = [1, 2, ...arr];
// console.log(newArr);

//new array adding food item ============================
// const newMenu = [...restaurant.mainMenu, 'kabab'];
// console.log(newMenu);

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// iterables : string, arays, maps, sets, not a objects

// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// const ingredients = [
//   prompt("let's makes pasta ! Ingredient 1"),
//   prompt('Ingredient 2'),
//   prompt('Ingredient 3'),
// ];
// console.log(ingredients);
// // orederPasta function calling
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //=================Importnat=================
// let a = 10;
// let b = 20;
// const obj = { a: 25, b: 30, c: 45 };
// // let { a: x, b: y } = obj;
// ({ a, b } = obj);
// console.log(x, y);

// =====================for full obj properties=============

// const { fri } = openingHours;
// console.log(fri);

//========== for speacific properties/Nested Objects=================
// const { fri: { open, close },} = openingHours;
// console.log(open, close);

// =====================using refrence variables================
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr2 = [5, 10, 20];
// [a, b] = arr2;
// console.log(a, b);
//==================================================================

// const arr = [2, 3, 4, 5];
// const [a, b, c, d] = arr;

// console.log(a, b, c, d);
// console.log(arr);

// let [first, , second] = restaurant.categories;
// console.log(first, second);

// //swapping value
// // const temp = first;
// // first = second;
// // second = temp;
// // console.log(first, second);

// //we can use short way for swapping
// [first, second] = [second, first];
// console.log(first, second);

// //==============================================================
// console.log(restaurant.order(2, 0));

// // destructuring index

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// //===========Nested Array =================================

// const nested = [1, 2, 3, [5, 8]];
// // const [i, , , j] = nested;

// const [i, j, k, [l, m]] = nested;
// console.log(i, j, k, l, m);
