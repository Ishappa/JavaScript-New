'use strict';
// const ename = 'ish';

// function first() {
//   const age = 30;

//   if (age >= 10) {
//     const decade = 1;
//     var ans = true;
//   }

//   function second() {
//     const job = 'engineer';

//     console.log(ename);
//     console.log(`name is ${ename} and age is ${age}`);
//   }
//   second();
// }
// first();

function calAge(birthyear) {
  const age = 2024 - birthyear;

  function printAge() {
    const output = `your age is ${age} and your birthyear is ${birthyear}`;
    console.log(output);
  }
  if (birthyear >= 1998 && birthyear <= 2002) {
    var lastName = true;
    const str = 'you are in loop';
  }
  //   console.log(str);
  console.log(lastName);

  printAge();
  return age;
}
// calAge(2000);
console.log(calAge(2000));

// console.log(x);
// console.log(y);
// var x=10;
// let y=20;

// let a = 1;
// if (a == 1) {
//   let x = 20;
// }
// console.log(x);

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x); //true
// console.log(y === window.y); //false
// console.log(z === window.z); //false
// ==============================================
//Objects calling and using this keyboard
// console.log(this); // call the widow

// const isha = {
//   birthyear: 1998,
//   calcAge: function () {
//     console.log(2024 - this.birthyear);
//   },
// };
// isha.calcAge();

// const dan = {
//   birthyear: 2000,
// };

// dan.calcAge = isha.calcAge;
// dan.calcAge();
//========================================================
// const isha = {
//   firstName: 'John',
//   birthyear: 1998,
//   calcAge: function () {
//     console.log(2024 - this.birthyear);
//   },
//   //   greet: () => {
//   //     console.log(`Hey ${this.firstName}`); // undefine the first name and you should never use arrow functions
//   //   },
//   greet: function () {
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// isha.greet();

//============================================================

// const isha = {
//   firstName: 'John',
//   birthyear: 1998,
//   calcAge: function () {
//     console.log(2024 - this.birthyear);
//     // this keyword will not work it will throw an error
//     const isValid = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isValid();
//   },

//   greet: () => {
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// isha.greet();
// isha.calcAge();

// ====================================================================

// const addExp = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExp(2, 5, 6);
// addExp(2, 5, 6, 8, 12);

// const addArrow = (a, b) => {
//   // arguments are not working for arrow function
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 6);

// ======================================================================

// const me = {
//   name: 'ish',
//   age: 24,
// };

// const friend = me;
// friend.name = 'Nag';
// console.log('friend', friend);
// console.log('Me', me);
// console.log(friend === me);

// let age = 25;
// let oldAge = age;
// age = 27;
// console.log(age);
// console.log(oldAge);
// console.log(age === oldAge);
// =========================================================================
