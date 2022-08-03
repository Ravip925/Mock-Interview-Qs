// console.log("Day 3");

// //1.What is callback hell
// //Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits 
// //for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code. 
// //we should always try to avoid using multiple callbacks to end up falling into callback hell.

// const getEmpId = () =>{
//     setTimeout(() =>{
//         console.log("Fetching the ID's");
//         let id = [1,2,3,4,5];
//         console.log(id);

//         setTimeout(()=> {
//             let empDetails = {
//                 fName: "Harsh",
//                 lName: "Bajaj",
//                 age:25,
//             }
//             console.log(`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and age is ${empDetails.age}`);

//             setTimeout(() =>{
//                 empDetails.gender = "Male",
//                 console.log(`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and age is ${empDetails.age} and the gender is ${empDetails.gender}`);
//             },2000);

//         },2000);
//     },2000);
// }
// getEmpId();

// //----------------------------------------------------------------------------------------------------------

// //2.What are promises and why do we need them?
// //promises are used to handle asynchronous opertions in js. they are ez to manage when 
// //dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanagable code.
// //it also allows us to make API calls or fetch data from web servers successfully. If not able to do so fetches us with error message
// //It have three stages.
// //1. pending                    2.Resolve(fulfilled)                            3.Rejected.

// const getId = new Promise((resolve, reject)=>{//producer  //resolve and reject are executor function
//     setTimeout(() =>{
//         let id = [1,2,3,4,5];
//         resolve(id);
//         //reject("error in fetching the details");
//     }, 2000);
// });

// getId                        //consumer
//     .then((data) =>{
//         console.log("the resolved data is",data);
//     })
//     .catch((error) =>{
//         console.log(error);
//     });

// // ========================================================================================================================================

// //3.What is promise chaining
// //The methods of the Promise object such as promise.then(), promise.catch() and promise.finally() are used to connect further actions with a 
// //promise that becomes settled. These methods also return a separate newly generated promise object. Therefore, we can call the promise’s instance
// //method on the returned Promise. Thus, calling methods in this way is referred to as the promise chainin


// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(5);
//     }, 3 * 1000); // (*)
// });
// p.then((result) => { //(**)
//     console.log(result); // 5
//     return result * 2;
// }).then((result) => { //(***)
//     console.log(result); // 10
//     return result * 3;
// }).then((result) => {
//     console.log(result); // 30
//     return result * 4;
// }).then((result) => {
//     console.log(result); // 120
//     return result * 5;
// });

// // ========================================================================================================================================

// // 4.What is the purpose of async/await keywords?
// //Asynchronous/Await - They are used to handle promises more efficiently. The world async before a function always means
// //that fn always returns a PROMISE. So, we therefore use async before the fn name to return a promise instead of value.

// //Await is used to wait for the result that is to be returned from the promise. So we use await when we are calling a fn 
// //which returns a promise. Also, we can use them(Async/Await) for making API calls.

// //Await is always used with the keyword async.

// // ===========================================================================================================================================

// // 5.Give an example of async/await.
// const functionOne = () =>{
//     return("i am function one");
// }

// const functionTwo = () =>{
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             resolve("I am function two");
//         }, 3000);
//     })
// }

// const functionthree = () =>{
//     return "I am Function three";
// }

// const callAllFunction = async() =>{
//     let responseOne = functionOne();
//         console.log(responseOne);

//     let responseTwo = await functionTwo();
//         console.log(responseTwo);
    
//     let responseThree = functionthree();
//         console.log(responseThree);
// }

// callAllFunction();

// // ================================================================================================================================

// // 6.What is hoisting?
// //When the JavaScript engine executes the JavaScript code, it creates the global execution context. The global execution context has two phases: creation and execution.
// //During the creation phase, the JavaScript engine moves the variable and function declarations to the top of your code. This feature is known as hoisting in JavaScript.

// var counter;

// console.log(counter); // undefined
// counter = 1;


// // ================================================================================================================================

// // 7.What is the DOM?
// //The Document Object Model (DOM) is an application programming interface (API) for manipulating HTML documents.
// //The DOM represents an HTML document as a tree of nodes. The DOM provides functions that allow you to add, remove, and modify parts of the document effectively.
// //Note that the DOM is cross-platform and language-independent ways of manipulating HTML and XML documents.

// ===================================================================================================================================

// 8.Difference between undefined vs not defined vs NaN
// undefined - undefined is a global variable that JavaScript creates at run time. JavaScript assigns undefined to any variable that has been declared 
//             but not initialized or defined. In other words, in a case where no value has been explicitly assigned to the variable, JavaScript calls it undefined.
let num;
console.log(num);//undefined

// Not defined - A not defined is a variable that is not declared at a given point of time with declaration keyword like var, let, or const.
// console.log(a);//ref error, not defined.
// let a = 10;

// NaN(Not-a-Number) - In JavaScript the Number() function converts other data types to a number type if compatible. Now, if the current type is not 
//compatible with the number type then it throws a "NaN" exception.

let num1 = parseInt("abc") 
console.log(num1);// NaN

// ===================================================================================================

//9.How many operators do we have in JS ?
//Js basically have six operators
// Assignment Operators[=, +=, -=, *=, /=, %=, **=]
// Arithmetic Operators[+, -, *, /, %, ++, --, **]
// Comparison Operators[==, !=, ===, !==, >, >=, <, <=]
// Logical Operators[&&, ||, !]
// Bitwise Operators[&, |, ^, ~, <<, >>, >>>]
// String Operators

// ===========================================================================================================

// 10.What are pure functions?
//Pure functions- this is the a function which gives you same output for same input passed.
//it doesnt give you diff output for the same input every time we call the function.it doesnt depends on 
//some variables whoes value might change in the future, and therefore always gives u same values. Ex a function  which only uses constatnt in their body.

function area(r){    // pure function/ o/p will remain same based on i/p
    let area = 3.14*r*r;
    console.log(area);
}
area(3);
area(3);
area(3);

// ==============================================================================================================

//11.What are arrow functions?
//Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions. 
//Syntax-
// let myFunction = (arg1, arg2, ...argN) => {
//     statement(s)
// }

let greet = x => console.log(x);
greet('Hello'); // Hello 
