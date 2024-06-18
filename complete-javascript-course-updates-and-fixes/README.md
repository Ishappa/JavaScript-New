# 🐛 UPDATED and FIXED Code for my Complete JavaScript Course

The _master_ branch in this repo contains the code **exactly** as shown in the course videos. However, some parts of the code contain small bugs or need updates. That's what _this_ branch is for.

**This branch will be kept up-to-date over time with latest package updates and important bugfixes 🐛**

So if you have any problem with the code in one of the course sections, check out the final code in this branch. Note that only folders with the 🐛 icon in the commit message have seen an update.

Happy coding! ✌️

# Java Script is a -->

1.High Level : Any computer

2.Grabage-collected : cleaning the memory from unwanted data or objects automatically

3.Interpreted or Just-in-Time compiled : it will understand 0s and 1s mean (machine code will be compiled)

4.Multi-paradigm : An approch and mindset of structuring code, which willdirect your coding and technique.

examples :

1. Procedural programming(imperative and declarative)
2. object-oriented programming
3. Functional programming

5.Prototype-based object-oriented programming

example:
Array

1. Array.prototype.push
2. Array.prototype.indexOf
   we can use these functions to our array

examples: built from prototype
const arr =[1,2,3,4,5];
arr.push(6);
const hasZero = arr.indexOf(0)>-1;

6.First-class funtions : we can treat functions as a variables and we can pass them into other functions and return then from functions.

example:
const closeModal = ()=>{
modal.classList.add("hidden);
overlay.classList.add("hidden");
};
overlay.addEventListener("click", closeModal);

7.Dynamic : it can change the datatype automatically when we reassign the different datatype values.

example:
let x=10;
let y=15;
x="hello";

8.Single-threaded :

concurrency model : how js engine handle multiple tasks at a same time.

JavaScript runs in one SingleThreade. so it can only do one task at a time.

9.Non-blocking event loop :
if we have a long running task, we can use evnt loop excecuting them in background.and puts them back in the main thread once they are finished.

================================================================

# JavaScript Engine:

1. CallStack: where our code is excecuted

2. Heap: where objects are stored

3. Compilation: process of converting normal code into machine code. and written to a binary file that can be excuted by computer.

process: source code --> portable file(machine code) --> program running

4. Interpretation: runs through the source code and excecutes it line by line.

process: source code --> program running

5. JIT(Just in time) compilation: entire code is converted into machine code at once, then executed immediately.

process: source code -->machine code--> program running

here no portable file will not be created after compilation immediatly executes. (js is interpreted as well as compiled program language)

where code write in engine --> parsing code --> Ast --> compilation(JIT) --> execution(call-stack)

# Execution Context:

--> creation of global execution context(for top-level code)

# scope in js -->

--> scope is a space of where our variables are declared.

1. Global Scope:

- outside of any function or block.

- variables can be a accessable to anywhere.

2. Function scope:

- Variables are accessible only inside functions.
- also called as local scope.

3. Block scope:

- variable are accessable only inside block
- function scope also consider as a block scope only in strict mode.

examples:
function first() {
const age = 30;

if (age >= 10) {
const decade = 1; // let and const are a block scope
var ans = true; // var is a function scope
}

function second() {
const job = 'engineer';

    console.log(ename);
    console.log(`name is ${ename} and age is ${age}`);

}
second();
}
first();

# var-let-const Important.......

- let and const are block-scoped.
- var declarations are either globally scoped or function-scoped.
- Let variables can be updated but not re-declared, const variables cannot be updated or re-declared.
- var variables may both be updated and re-declared inside their scope.
  examples:

# declared variables inside the block and trying to accessing outsdie the block

1.  let a = 1;
    if (a == 1) {
    let x = 20;
    }
    console.log(x); // we cannot access x outside the block(because we declared by using let)

2.  let a = 1;
    if (a == 1) {
    var x = 20;
    }
    console.log(x); // NO error(because we declared by using var)

3.  var x = 1;
    let y = 2;
    const z = 3;

console.log(x === window.x); //true
console.log(y === window.y); //false
console.log(z === window.z); //false

# this

const isha = {
firstName: 'John',
birthyear: 1998,
calcAge: function () {
console.log(2024 - this.birthyear);
},
// greet: () => {
// console.log(`Hey ${this.firstName}`); // undefine the first name and you should never use arrow functions
// },
greet: function () {
console.log(`Hey ${this.firstName}`);
},
};
isha.greet();

# closuer function

A clouser function dosent lose the conncetion to variables that existed at the function's birth place.

# example:

const secureBooking = function () {
let passengerCount = 0;
return function () {
passengerCount++;
console.log(passengerCount);
};
};
//example 2: for closuer function==========================
const booker = secureBooking();
booker();//1
booker();//2
booker();//3 always it will catch the old values

example : child to parent dosent lose the conncetion to variables that existed at the function's birth place

# Operators

const user = [];
if (user.length > 0) {
console.log(user[0]);
} else {
console.log('user array empty');
}
// we can write like this using ?? nullish collisions operator
console.log(user[0] ?? 'User array empty');

=== using objects==============

const user1 = [{ name: 'Alice' }, { name: 'Bob' }];
console.log(user1[0]?.name ?? 'User array empty'); // Output: 'Alice'

const user2 = [1, 2];
console.log(user2[0]?.name ?? 'User array empty'); // Output: 'User array empty'

# Map method

//example
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num \* 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]
