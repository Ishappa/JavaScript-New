'use strict';

// const flight = 'LH123';
// const jonas = {
//   name: 'Jhonas schdem',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random()) * 100000;
// };
// newPassport(jonas);
// checkIn(flight, jonas);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  // Split the string into words and Extract the first word and the remaining words
  const [first, ...others] = str.split(' ');

  return [first.toUpperCase(), ...others].join(' ');
};
//Higher Order Functions================================

const transformer = function (str, fn) {
  console.log(`Transformer string: ${str}`);
  console.log(`Transformer function: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('hey How are you..!👋');
// };

// document.body.addEventListener('click', high5);

//========function returns function================================

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeter = greet('Hey');
greeter('Nags');
greeter('Ish');

greet('Hello')('Joy');

//---------using arrow functions----------------------
// const greet2 = (greeting2, second) => {
//   return name2 => {
//     console.log(`${greeting2}${second} ${name2}`);
//   };
// };
// // const greeter2 = greet2('HI');
// // greeter2('Ish');
// const greeter2 = greet2('HI', '!')('Ishwar');

//---------or---------------------------

const greet2 = greeting2 => name2 => console.log(`${greeting2} ${name2}`);
const greeter2 = greet2('HI');
greeter2('Ish');

//=======================Bind method ==================
const person = {
  name: 'Alice',
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// it will call widow object
// const greets = person.greet;
// greets(); // Output: Hello, my name is undefined

// this will call the this keyword
const greets1 = person.greet.bind(person);
greets1(); // Output: Hello, my name is Alice

// person.greet();

//partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
console.log(addVat(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));
console.log(addVat2(23));

// ====================closuer function =================
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};
//example 1: for closuer function==========================
const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);

function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
  };
}

const counter = createCounter();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.decrement(); // Output: 1

// Example:3 ========================================

function createAdder(x) {
  return function (y) {
    return x + y;
  };
}

const addFive = createAdder(5);
console.log(addFive(2)); // Output: 7
console.log(addFive(10)); // Output: 15
