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

// ============================================================================================================

// Q.1) What is Javascript 

// Javascript is an scripting language that allows you to impliment complex features on webpages.
// JS is a single threaded synchronous language. (Single threaded means one code is executed at a time) 
// JS also is an interpreter language means that the code is going to run line by line.
// JS is a combination of both compiler and interpreter.


// Q.2) Difference between compiler and interpreter

// Interpreter-  i) Translates program one statement at a time.
//              ii) Interpreters usually take less amount of time to analyze the source code. However, the overall execution time is comparatively slower than compilers.
//             iii) Programming languages like JavaScript, Python, Ruby use interpreters.

// Compiler -   i) Scans the entire program and translates it as a whole into machine code.
//             ii) Compilers usually take a large amount of time to analyze the source code. However, the overall execution time is comparatively faster than interpreters.
//            iii) Programming languages like C, C++, Java use compilers.


// Q.3) Explain Execution context

// Execution context is the concept for describing the internal working of a code.
// In JavaScript, the environment that enables the JavaScript code to get executed is what we call JavaScript Execution Context. 
// It is the execution context that decides which code section has access to the functions, variables, and objects used in the code.

// Global Execution Context is also called the base/default execution. Any JavaScript code which does not reside in any function will be present in the global execution context.
// Functional Execution Code is that type of context which is created by the JavaScript engine when any function call is found.

// The Execution context mainly contain memory allocation and code execution phase. 


// Q.4) What is Run-time Environment in JS.

// The runtime environment is the environment in which a program or application is executed. 
// It's the hardware and software infrastructure that supports the running of a particular codebase in real time.


// Q.5) JavaScript Engine

// JavaScript engines are inbuilt in all the modern browsers today. When the JavaScript file is loaded in the browser, 
// JavaScript engine will execute each line of the file from top to bottom (to simplify the explanation we are avoiding hoisting in JS). 
// JavaScript engine will parse the code line by line, convert it into machine code and then execute it.

// Ex. i) Google - V8   ii) Mozilla firefox - Spider Monkey    iii) Microsoft  -  Chakra

// Google chrome’s JavaScript V8 engine: Firstly, raw JavaScript file goes into the Parser. 

// Parser: It checks for syntax and semantics. Parser is nothing but a lexical analysis that results into the breaking of code into tokens 
// in order to understand their meanings and these tokens gets converted into Abstract Syntax Tree(AST).

// Abstract Syntax tree: It is a hierarchical tree like structure of program representation which allows interpreter to understand the program. This AST is initially goes to the Interpreter.

// Interpreter: It lets the AST to get converted into Byte code. In V8 engine, this process is known as Ignition but when some code gets repeated again and again.

// Profiler: It will check for the repeating code that can be optimized. As soon as, it gets the repeating code, it basically moves the code into compiler.

// Compiler: It spits out the most optimized byte code. In the above case, it will see the repeating code and optimize the code by replacing the multiply(4, 3) as 12, 
// since it gets repeated again and again and it will produce the optimized byte-code which gets replaced with the slower byte code produced by the Interpreter. In V8 Engine, This compiler is called as TurboFan.
// This process gets repeated again and again which means that JavaScript Engine’s speed gets improved since profiler and compiler will be producing and updating the optimized byte code.
