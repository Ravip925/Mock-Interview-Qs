// {/* Different Data Types available in JavaScript ?</h1>
// 1.Primitive Data type
// Number 
// Null
// Boolean
// Symbol
// String
// BigInt
// undefined

// 2.Non Primitive Data type
// Everything in JavaScript is Object
// 1. Array
// 2. Object

// Difference between var, let and const

//var 
// 1.var is an Global and Functional Scope
// 2.var can be redeclare.
// 3.var can modified.
function print(){
  var a = 10;
  console.log(a); //10
}
print();
// console.log(a); //10

// let
// 1.let is an Block Scope
// 2.let can't be redeclare.
// 3.let can modified.

// const

// 1.const is an Block Scope
// 2.const can't be redeclare.
// 3.const can't modified.

// // <h2>How many ways declare a variable ?</h2>
// // 1.variable(var)
// // 2.let
// // 3.constant(const)
// // <h2>What is Hoisting ?</h2>
//     Hoisting is a JavaScript Mechanism where variables and function 
// declarations are moved to the top of the scope before the code execution.

// Note: Only Declarations are hoisted not the initialization


// // <h2>What is Temporal Dead Zone ?</h2> */}
  // It is the area of block where a variable is inaccessible until
  // the moment computer initialization it wit a value.

function showTDZ() {
  console.log(a); //100
  // console.log(b); //ReferenceError
  var a = 100;    
  let b = 20;
}
showTDZ();
// i am accessing variable a before the Declaration and initialization.

//What is the Difference between ==  and ===  operator ?

// ==only checks the value
// === checks both values and data types

// What are the different types of Operators in JavaScript ?

// 1.Arithmetic Operators
// 2.Comparison Operators
// 3.Logical Operators
// 4.Relational Operators
// 5.Conditional Operators
// 6.Bitwise Operators


// ==================================================================================================================


// CALL, BIND AND APPLY IN JAVASCRIPT------------------
// These are just different ways of invoking or calling a function
//  When you are calling a function using any of these 3 then you dont have to define in the function that it will be taking obj as a parameter
// It will assume that the first argument which is coming while calling the function will be an object only.
//creating an object for the reference
// let user = {
//     name : "Ravi",
//     age : 23,
//     salary : 50000,
//     city : "Belgaum"
// }
// let user2 = {
//     name : "Omkar",
//     age : 21,
//     salary : 60000,
//     city : "Bangalore"
// }


// creating a function which will be using this object
// When using call bind or apply

// function UserDetails (company, designation) {
//     // console.log("Hello inside function", this);
//     console.log(this.name + " is " + this.age + " years old. ", company, " ", designation);
// }

//  Call : In case of call each and every argument which is required to be passed to the function will be passed individually.
// UserDetails.call(user2, "Google", "Backend Developer");

//  Apply : In case of apply each and every argument which is required to be passed to the function will be passed inside an array .
// UserDetails.apply(user2, ["Amazon", " Full Stack Developer"]);

// Bind : In case of bind, it will return you a new function. And this new function you can use anytime anywhere.
// const newFunction = UserDetails.bind(user);
// newFunction("Flipkart", "Data Scientist")



// 1. First Class Functions
// First Class Function : It is also called first class citizen function, there are three points
// to remember are below:
// 1. Function can be assigned to a variables.
// let myFunction = function(){
//     console.log('This is function that is assigned to a variable');
//     }
//     myFunction();

// 2. Function can be passed as an argument to other function.
// function printHello() {
//     console.log("Hi I am function passed as an argument so I am a first class Function");
//   }
//   function executeFn(functionAsArgument) {
//     functionAsArgument();
//   }
//   executeFn(printHello); // passing printHi function as an argument

// 3.Function can be returned from other function
// function getFunction() {
//     return function(){
//       console.log("I am function returned from another function so i am a first-class function")
//     }
//   }
//   let fn = getFunction();
//   fn(); // this will call the returned function


// CALL, BIND AND APPLY IN JAVASCRIPT------------------
// These are just different ways of invoking or calling a function
//  When you are calling a function using any of these 3 then you dont have to define in the function that it will be taking obj as a parameter
// It will assume that the first argument which is coming while calling the function will be an object only.
//creating an object for the reference
// let user = {
//     name : "Ravi",
//     age : 23,
//     salary : 50000,
//     city : "Belgaum"
// }
// let user2 = {
//     name : "Omi",
//     age : 21,
//     salary : 60000,
//     city : "Bangalore"
// }
// creating a function which will be using this object
// When using call bind or apply
// function UserDetails (company, designation) {
//     // console.log("Hello inside function", this);
//     console.log(this.name + " is " + this.age + " years old. ", company, " ", designation);
// }
//  Call : In case of call each and every argument which is required to be passed to the function will be passed individually.
// UserDetails.call(user2, "Google", "Backend Developer");

//  Apply : In case of apply each and every argument which is required to be passed to the function will be passed inside an array .
// UserDetails.apply(user2, ["Amazon", " Full Stack Developer"]);

// Bind : In case of bind, it will return you a new function. And this new function you can use anytime anywhere.
// const newFunction = UserDetails.bind(user);

// newFunction("Flipkart", "Data Scientist")
// Objects in JavaScript
// Objects are the non-primitive datatypes and are use to store multiple data in the form of key value pairs
// const ObjName = {
//    name : 'Sairam',
//    age : 24,
// }
// console.log('I am ' + ObjName.age + 'years old ')




// Function Constructor
// Function constructor is kind of regular function to create multiple objects at a time. When creating function constructor, it is good practice to keep the first letter of the name, capital.
//  new keyword is mandatory to be used with function constructor.
// function Person(name, salary){
//     this.name = name,
//     this.salary = salary
// }

// const person1 = new Person('sanjay', 50000);
// console.log(person1.name);
// What is prototype and Prototype chaining?
// function Person(name, age){
//     this.name = name;
//     this.age=age;
//     this.salary = 100000;
//  }

//  let person1 = new Person("Anwar",23);
//  let person2 = new Person("Shanth",45);
//  console.log(person1);
//  console.log(person2);

 //in case, if you want to add other properties by using function constructor.
// person1.salary = 50000;
// console.log(person1);

// in case when you want to add properties inside the function constructor.
// Person.prototype.Nationality = "India";
// person1.Nationality = "American";
// console.log(person1.Nationality);



// Example of inheritance using function constructor
// function Animal(name, color){
//     this.name = name;
//     this.color = color;
// }
// function AnimalDescription(name, color, age, sound){
//     Animal.call (this, name, color);
//     this.age = age;
//     this.sound = sound;
// }


// let Animal1 = new AnimalDescription('Bruno', 'Dark', 2, 'Barks')
// // console.log(Animal.prototype);
// console.log(Animal1);
// // CALL BACK: function which is passed as argument to another function.
// function output(callback){
//     console.log("out");
//     callback()
// };
// function input(){
//     console.log("in")
// };

//output(input);
//Why do we use it? ---The callbacks are needed because javascript is an event driven language. That means instead of waiting for a response javascript will keep executing while listening for other events. Let's take an example with the first function invoking an API call(simulated by setTimeout) and the next function which logs the message.
// function firstFunction() {
//     // Simulate a code delay
//     setTimeout(function () {
//       console.log("First function called");
//     }, 1000);
//   }
//   function secondFunction() {
//     console.log("Second function called");
//   }
//   firstFunction();
//   secondFunction();
// SETTIMEOUT
// The setTimeout() method is used to call a function or evaluate an expression 'after' a specified number of milliseconds. For example, let's log a message after 2 seconds using setTimeout method,
// setTimeout(function () {
//   console.log("Good Afternoon");
// }, 2000);