alert("file is connected")


//Prompt the user and catch their response in a variable 

let userName = prompt("What is your name?");

//Prompt will return a value when the user presses the okay button on the pop up

console.log("Welcome " + userName + " to my program.");

let dogAge = prompt("What is the age of your dog in human years?");

//Convert human years to dog years 
let doggieAge = dogAge * 7;

console.log("In human years your dog is  " + dogAge + " , but in dog years she is " + doggieAge + " years old");


//Calculate area of a rectangle
console.log("Great!  Now lets figure out the area of your dogs rectangular cage.");

let width = prompt("Enter the width of the cage using inches.");
let length = prompt("Enter the length of the cage using inches.");

let area = width * length / 12;
console.log("The total area of your cage is "+area+" square feet. ");