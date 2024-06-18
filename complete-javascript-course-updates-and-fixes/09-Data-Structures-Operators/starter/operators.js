console.log(3 || 'jonas');
console.log(undefined || null); // null

let a = 0;
const ans1 = a ? 4 : 'no value';
console.log(ans1); // Output: 'no value' because 0 is falsy value
// Here, i is 0, which is falsy, so the ternary operator would result in 'no value'.

// let i = 2;
// const ans = i ? 2 : 'no value';
// console.log(ans);

console.log(0 && 'helo');
console.log(7 && 'hello');

console.log('hello' && 23 && null && 'jonas'); //null returns falsy
console.log('hello' || (23 && null) || 'jonas'); //hello returns true

//Nullish values are false and undefined
const x = 0;
const y = x ? 10 : 1;
console.log(y); //1

const z = x ?? 10;
console.log(z); //0

const person1 = {
  name: 'ish',
  age: 24,
};

const person2 = {
  name: 'nagi',
};
// person1.age = person1.age || 25;
// person2.age = person2.age || 28;

person1.age ||= 25;
person2.age ||= 28;

// console.log(person1);
// console.log(person2);

//0r we can use ternary to set age to obj
person2.age = person2.age ? 20 : 24;
console.log(person2);

// console.log(x1); // Output:Reference Error .... undefined for var
// let x1 = 5;
// console.log(x1); // Output: 5
//==================================== example for optional chaining
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
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

//Optional chaining=====================================

console.log(restaurant.openingHours.thu);
console.log(restaurant.openingHours.mon); //undefined
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// for (const a of weekdays) {
//   console.log(a);
//   console.log(restaurant.openingHours[a]?.open);
// }

//?? nullish collisions operator==============================

console.log(restaurant.openingHours.mon?.open ?? 'closed'); // it wll avoid repeation
console.log(
  restaurant.openingHours.fri ? restaurant.openingHours.fri.open : 'closed'
);

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderPasta?.(0, 1) ?? 'Method does not exist');

const user = [];
if (user.length > 0) {
  console.log(user[0]);
} else {
  console.log('user array empty');
}
// we can write like this using ?? nullish collisions operator
console.log(user[0] ?? 'User array empty');

const user1 = [{ name: 'Alice' }, { name: 'Bob' }];
console.log(user1[0]?.name ?? 'User array empty'); // Output: 'Alice'

const user2 = [1, 2];
console.log(user2[0]?.name ?? 'User array empty'); // Output: 'User array empty'
