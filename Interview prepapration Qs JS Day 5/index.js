// Qs 1.
// Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button
let h1 = document.getElementsByTagName("h1");
function ShowText(){
    h1[0].innerText = "MERN Stack";
}
// ==================================================================================================================

// Qs 2
// Write code to get 1st H1 element from a webpage using DOM
document.getElementsByTagName("h1")[0];
document.querySelector("h1")[0];

// =================================================================================================================

// Question 3
// Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
function showDate(){
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();
    if(hrs>=12){
        hrs = hrs - 12;
    }

    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = sec;
}
setInterval(showDate,1000);

// =================================================================================================================

// Qs 4
// Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this
// button page content should be changed to "Welcome to Elevation academy"


document.getElementById("changeBtn").onclick = function(){

    h1[1].innerText = "Welcome to Elevation Academy";
    h1[1].style.color = "blue"
}

// ======================================================================================================================

// Qs 5
// Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on
//  this button hide the "Hello World" text
document.getElementById("changeBtn2").onclick = function(){
    h1[2].style.display = "none";
}


// =========================================================================================================================

// Qs 6
// Given an array of 0's and 1's find out number of 0's

let a = [1,1,0,0,0,1,1,1,0];
let count1= 0,
count2 =0;
for(let i = 0; i < a.length; i++){
    if(a[i]==1){
        count1++;
    }
    if(a[i]==0){
        count2++;
    }
    
}
console.log(`the number of 1 in the array is ${count1}`);
console.log(`the number of 0 in the array is ${count2}`);


// // =========================================================================


// Qs 7
// Given an array find out total no. of odd and even nos.

let b = [1,5,4,8,9,13,14,15];
let counter1= 0,
counter2 =0;
for(let i = 0; i < b.length; i++){
    if(b[i]%2 == 0){
        counter1++;
    }
    if(b[i]%2 !=0){
        counter2++;
    }
    
}

console.log(`The even numbers in the array is ${counter1}`);
console.log(`The odd numbers in the array is ${counter2}`);

// // =========================================================================

// Question 8
// Given a string find out number of vowels

let str = "Ravi";
const vowel = ["a", "e", "i", "o", "u"];
let count = 0;
for(let letters of str.toLowerCase()){
    if(vowel.includes(letters)){
        count++;
    }
}
console.log(`vowels in the string are ${count}`);


// // ===========================================================================

// question 9
// Write a code to create two objects with 2 properties each, one will be string and other will be an array.
// Create a function to check if all the elements of the arrays in both the objects are same

const obj1 = {
    fName: "Ravi",
    mySub: ["python","java","c++","react"]
}
const obj2 = {
    lName: "Patil",
    mySub: ["python","java", "c++","react"]
}
const compareArrays = () => {
    const result = JSON.stringify(obj1.mySub) == JSON.stringify(obj2.mySub);
    if(result){
        console.log("true");
    }
    else{
        console.log("false");
    }
}
compareArrays();



