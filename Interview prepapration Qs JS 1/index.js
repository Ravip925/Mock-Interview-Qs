//JS Day 1

//Qs 1.Difference between “ == “ and “ === “ operators.
//== operator -
//Compares two operands
//returns true if operands have the same data type and same value, returns false if the values differ.
//Ex. console.log(2 == 2);
//output: true because 2 and 2 are same

//=== Operator -
//Compares two operands.
//returns true only if operands are of same data type and same value, otherwise returns false.
//Ex. console.log(2 === 2);
//output: true, because 2 and 2 have same data type and value

//console.log(2 === '2');
//output: false, because the === operator doesn't do the type conversion and the data types of both operant are different.

// ==================================================================================================================================

//Qs 2.What is the spread operator?
//In JavaScript, spread syntax refers to the use of an ellipsis of three dots (…) to expand an iterable object into the list of arguments.
//Ex. const arrValue = ['My', 'name', 'is', 'Jack'];

//console.log(arrValue);   // ["My", "name", "is", "Jack"]
//console.log(...arrValue); // My name is Jack


// ================================================================================================================================

// Qs 3.What are the differences between var, let and const?
// let - 1.we can declare the variable name in one line and initialised it on another line or in the same line itself.
//       two variable with same name arent possible with let
//       2.we can reassign /update the values of the variable which have already been initialized
//       3.LET IS BLOCK scoped
//       4.let doesn't support hoisting

// const -1. we have to declare the variable and initialised it on the same line itself.
//        2.two variable with same name arent possible with let
//        3.we can't reassign /update the values of the variable which have already been initialized
//        4.const IS BLOCK scoped
//        5.const also doesn't support hoisting

// var - 1.we can declare the variable name in one line and initialised it on another line or in the same line itself.
//       2.two variable with same name are possible with var.
//       3.we can reassign /update the values of the variable which have already been initialized
//        var IS globle scoped
//        var support hoisting

// =========================================================================================================================

// Qs 4.What is execution context
//In JavaScript, the environment that enables the JavaScript code to get executed is what we call JavaScript Execution Context. 
//It is the execution context that decides which code section has access to the functions, variables, and objects used in the code. 
//During the execution context, the specific code gets parsed line by line then the variables and functions are stored in the memory. 
//An execution context is similar to a container that stores variables, and the code gets evaluated and then executed. 
//Thus, it is the execution context that provides an environment for the specific code to get executed.
//There Three types of execution contex in js
//Global Execution Context/GEC
//Functional Execution Context/FEC
//Eval Execution Context

// ===========================================================================================================================

// Qs 5.What is creation phase and execution phase?
//Creation phase - 
//Create the global object i.e., window in the web browser or global in Node.js.
//Create the this object and bind it to the global object.
//Setup a memory heap for storing variables and function references.
//Store the function declarations in the memory heap and variables within the global execution context with the initial values as undefined.

// Execution Phase -
//During the execution phase, the JavaScript engine executes the code line by line, assigns the values to variables, and executes the function calls.
//For each function call, the JavaScript engine creates a new function execution context.The function execution context is similar to the global 
//execution context. But instead of creating the global object, the JavaScript engine creates the arguments object that is a reference to all the parameters of the function.

// ===================================================================================================================================

// Qs 6.What are closures? Give an example of closure.
//In JavaScript, closure provides access to the outer scope of a function from inside the inner function,
// even after the outer function has closed.
//Ex 
// outer function
// function greet() {

//     // variable defined outside the inner function
//     let name = 'John';

//     // inner function
//     function displayName() {
//         // accessing name variable
//         return 'Hi' + ' ' + name;
//     }

//     return displayName;
// }

// const g1 = greet();
// console.log(g1); // returns the function definition
// console.log(g1()); // returns the value

