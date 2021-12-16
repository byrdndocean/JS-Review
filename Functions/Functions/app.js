// Function Declarations (Function Statement)

// functions are reusable pieces of code that we can use all the time.
// Define the funciton
// Call the function otherwise it won't do anything

// function myFunc() {
//     console.log('I am a function');
// }
// myFunc();   //I am a function

//when we create the function we pass in parameters
//in the function call we pass in arguments
// the argument is going to take the place of the parameter



// // Example 1
// function sumNums() {
//     console.log(5 + 6);
// };
// sumNums();

// // Example 2
// function message() {
//     let red = '#ff0000';
//     console.log(`The hex value of the red color is ${red}`);
// }
// message();


// // Example 3
// function color(hex) {
//     console.log(hex);
// }
// color("#ff0000");
// color("#easdfc");
// color("#21es4f");

// // Example 4
// function calcNums(x) {
//     console.log(((x + 1) * x) / (x + 10));
// }
// calcNums(200);


// //Example 1
// function movieRating(rating) {
//     console.log(`The movie's rating is ${rating}`);
// }
// movieRating(9.5);


// // Example 2
// function calcNums(x, y) {
//     console.log(x + y);
// }
// calcNums(5, 1);
// calcNums(14, -5);


// // Example 3
// function moviePerf(movieName, boxOffice) {
//     console.log(`The ${movieName} has grossed ${boxOffice} billion`);
// }
// moviePerf('Jurassic Park', 1.8);
// moviePerf('The Dark Knight', 1.2);
// moviePerf('The American Sniper', 0.8);


// RETURN KEYWORD
// No line of code is going to run after
// Basically wrap everything up

// // Example 1
// function sum(a, b) {
//     return a + b;

//     console.log(15+22);
//     //line above is greyed out b/c it's after return
// }
// // console.log(sum(10, 12));
// //we get 22
// // how can we store that value of 22?

// let sumNums = sum(10, 12);
// console.log(sumNums);
// // we get 22 b/c this function has been called
// // as a value for this variable


// //Example 2
// //implement if statements into functions
// function checkScore(currentScore, passingScore) {
//     if(currentScore >= passingScore) {
//         return 'Passed';
//     } else {
//         return 'Failed';
//     }
// }
// let result = checkScore(90, 55);
// console.log(result);


//Example 3
// Shorter version
// function checkScore(currentScore, passingScore) {
//     if(currentScore >= passingScore) {
//         return 'Passed';
//     }  
//         return 'Failed';
//     }
//don't need the {} for else statement
// or the 'else' keyword
// When the condition is not met, it's automatically
// going to return failed


////////////////////////////////////////////////
//VARIABLE FUNCTION SCOPE
//Scope specifies where the defined varialbe is accessible
//Scope is responsible for accessing variables and where
//we can access variables
// let, const, var

// function myFunc() {
//     let myName = 'Dresden';
//      console.log(myName);
// }
// myFunc();
// console.log(myName);
//we get error, b/c the function was defined inside the function
//whenever we define a variable inside a function, we cannot access it outside that function, whenever that variable is defined by let
//it's not accessible outside the function b/c the scope is limited to that function


// //Example const
// function myFunc() {
//     const myName = 'Dresden';
//      console.log(myName);
// }
// myFunc();
// console.log(myName);
// same thing as above example (let)
// can't reference


// //Example var
// function myFunc() {
//     var myName = 'Dresden';
//     console.log(myName);
// }
// myFunc();
// console.log(myName);
// // we get Dresden
// // then we get reference Error
// //with var you can still reference it from inside the function
// // can't access var outside of the function


///////////////////////////////////////////////
//VARIABLE BLOCK SCOPE
//var doesn't have any other scope

// // let
// if(2 >1 && 1 < 3) {
//     let result = true;
//     console.log(result);
// }
//     console.log(result);
// 1st log we get true, 2nd log we get error
// we can access 1st b/c they are in the same scope
// the scope is the block of the if statement
// we get error on 2nd b/c it's outside the block scope


// // const
// if(2 >1 && 1 < 3) {
//     const result = true;
//     console.log(result);
// }
//     console.log(result);

// //we get same results as above with let


// // var
// if(2 >1 && 1 < 3) {
//     var result = true;
//     console.log(result);
// }
//     console.log(result);

//we get true and true
//not a good thing
//let's say you have large application
//it's hard to keep up with all the names
// which can cause a lot of problems


// //Example
// // let
// let result = 25;
// if(2 >1 && 1 < 3) {
//     let result = true;
//     console.log(result);
// }
//     console.log(result);
// //we get true and 25
// //let result = true is defined and limited in the function
// // that's why we have 2 different answers




////////////////////////////////////
//FUNCTION EXPRESSIONS

//function expressions
//when functions are stored inside variables

//when they are standalone named functions they are called function declarations or function statements

// when they are stored inside variables they are called function expressions
//function expressions are also anonymous functions

// //Example
// let calcNums = function(z, w) {
//     return (z + w) / (z - w);
// };
// //this function doesn't have a name but the variable does
// //that variable's name acts as the function name
// //How?
// //Functions are not objects, but they behave like them
// console.log(calcNums(15, 25));
// console.log(calcNums(50, 25));


/////////////////////////////////////////////////////
//We can also use functions in arrays and objects
//FUNCTIONS IN ARRAYS
// function avgMikeScore(score, mikeScore) {
//     return (mikeScore + 5) / score;
// }
// let avgJoeyScore = function (score, joeyScore) {
//     return joeyScore / score;
// };
//inside arrays and objects we can use both kinds of functions
//it doesn't matter if you have a function expression or declaration
//function avgMikeScore was declared in the global scope
//so can be accessed with any other scope
//global scope is the parent of all other scopes
//remember try to use const for arrays objects
// const scores = [avgMikeScore, avgJoeyScore];
//     console.log(scores);
// for (let i = 0; i < scores.length; i++) {
//     let result = scores[i](100, 20)
//     console.log(result);
// };


//////////////////////////////////////////////////////////////
//FUNCTIONS IN OBJECTS
//Can we use functions as object properties, yes

//for of loop
//comment out the for loop from previous example
// we create a different kind of variable
//avgScore is going to access the first item in scores which is avgMikeScore
//the 2nd iteration avgScore is going to grab avgJoeyScore
//what do we want to do when these 2 iterations happen?
//for loop and forOf loop work in the same way
// for(let avgScore of scores) {
//     let result = avgScore(100,20);
//     console.log(result);
// };



//Wrap up, when the forOf loop has a variable avgScore
//it's going to tap inside of an array
//we don't have to provide a starting point like for loop
//or an increment or condition
// We just say, go to this array and iterate over it as many times as the array has items
//for of loop is es6
// w/o comments the code looks like this
// function avgMikeScore(score, mikeScore) {
//     return (mikeScore + 5) / score;
// }
// let avgJoeyScore = function (score, joeyScore) {
//     return joeyScore / score;
// };

// const scores = [avgMikeScore, avgJoeyScore];
//     console.log(scores);

// for(let avgScore of scores) {
//     let result = avgScore(100,20);
//     console.log(result);
// };



// //FUNCTIONS AS OBJECT PROPERTIES
// const scores = {
//     mikeScore: avgMikeScore,
//     joeyScore: avgJoeyScore,
// }

// //these are functions as object properties
// //now we can call these functions through creating another method
// //whenever we use functions as object properties, we tend to create new methods
// console.log(scores.mikeScore(100, 20));
// console.log(scores.joeyScore(100, 50));
// //Now b/c this function has been called as a function as an object method or as an object property, this function is no longer called a function but instead a method
// // we just created another method in JS






//HIGHER ORDER FUNCTIONS
//functions which are accepting other functions as arguments
// or functions which are accepting other functions as a return value

//Functions accepting other functions as arguments
//Example 1
// function repeat(x) {
//     x();
//     x();
// }

// function num() {
//     console.log(2 + 5);
// }

// repeat(num);    //we get 7 and 7
//the num() function is actually a callback function

//functions which are arguments to other functions are also called callback functions
// functions which are called inside another function's call are callback functions


//Example 2
//factory function

//When a function is defined in another function, that function has access to its parents' variables even if they are not defined within the child's function
//the anonymous function has access to the value of X from its parent, the sum function

// function sum(x) {
//     return function (y) {
//         return x + y;
//     };
// }

//Higher order functions
// the function sum is going to return a value
//what is that value?
//that value is actually another function
//what does that function do?
// return x + y

// we can see that y has been defined b/c y is a parameter of this anonymous function
//what about x?
//x has not been defined inside the scope of this function
// but it's still accessible by this anonymous function (y)
//why?
//b/c x has been defined inside the parent of this function
// when the parent has a value defined, the child's function 
// which is the function (y) has access to that variable
//this is called lexical scope
//when a function has access to variables of its parents' function
//it works b/c this is a factory function
// and this works b/c of lexical scoping

//Wrap up
//We have a function sum(x)
//This function has a parameter inside of it 
//and the function of sum returns a value
//the value of this sum function is actually another function 
//and that function returns x + y
//the y has been specified inside this anonymous function
//What about x? (inside the anonymous function)
//How can this anonymous function access X?
//B/c the X belongs to its parent function
//the parent is another function, that's why
//this is called lexical scope

// //lets call the sum function
// let num1 = sum(5);
// console.log(num1);
// //it returns the anonymous function
// //Why?
// //Whenever you pass in an argument for this anonymous function then this entire thing is going to be evaluated.
// //the sum function has been evaluated, we provided it with x and it returned the anonymous function
// // the sum funciton did its job, but what about the anonymous function?
// //we should pass in an argument for that as well
// // in order to do that,
// console.log(num1(4));

//these are higher order functions



/////////////////////////////////////////////////////
//HIGHER ORDER FUNCTIONS CONTINUED RECAP

//lexical scope
//when a function is passed inside another function as the returned value
//so the anon function is a child of the sum function
//so it has access to its parents variables sum()
//the condition though, it has to be a returned function which means
//it should be a return function
//  Example from previous, return function(y){return x +y};
//when we create this function, we want to store the result inside the num1 variable
//let num1 = sum(5);
//console.log(num1);
//returns the child function
//how do we calculate the child function?
//we put in the parameter from the child function (y)
// we type 
//let num1 = sum(5);
//console.log(num1(6));




/////////////////////////////////////////
//CALLBACK FUNCTIONS
//passed in as anonymous functions
// those anonymous functions are called callback functions

// //Example 1
// setTimeout(function () {
//     console.log(2 + 2);
// }, 2000)
// //we get 4 after 2 seconds


// //Example 2
// const btn = document.querySelector("button"); 
// const para = document.querySelector("p");
// btn.addEventListener('click', function() {
//     para.classList.add('active');
// });

//This is a callback function
//function() {
 //   para.classList.add('active');
//}


