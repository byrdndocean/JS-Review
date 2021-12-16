// // Greater Than
// console.log(2 > 1);
//
// //Less Than
// console.log(2 < 1);
//
// // Greater Than or Equal To
// console.log(15 >= 15);
// console.log(15 >= 16);
//
//
// // Less Than or Equal To
// console.log(15 <= 15);
// console.log(15 <= 16);

// The == Equality Operator
// Only cares about the value not the type
// console.log(1 == 1);
// console.log(1 == "1");
// console.log("z" == "z");
// console.log(true == true);
// console.log(false == true);
// console.log(0 == ""); //0 is empty and the string is empty
// console.log(undefined == null); //both of them have same concept
// console.log(false == 0);
// console.log(true == 1);


// The === strict Equality Operator
// checks for the value and type
// console.log(1 === 1);
// console.log(1 === "1");
// console.log("z" === "z");
// console.log(true === true);
// console.log(false === true);
// console.log(0 === ""); //0 is empty and the string is empty
// console.log(undefined === null); //both of them have same concept
// console.log(false === 0);
// console.log(true === 1);


// The != Non-equality Operator (-)
// like the == not the ===
// console.log(1 != 1);
// console.log(1 != "1");
// console.log("z" != "z");
// console.log("z" != "x");
// console.log(true != true);
// console.log(false != true);
// console.log(0 != ""); //0 is empty and the string is empty
// console.log(undefined != null); //both of them have same concept
// console.log(false != 0);
// console.log(true != 1);


// The !== strict Non-equality operator
// checks for the value and type
// console.log(1 !== 1);
// console.log(1 !== "1");
// console.log("z" !== "z");
// console.log(true !== true);
// console.log(false !== true);
// console.log(0 !== ""); //0 is empty and the string is empty
// console.log(undefined !== null); //both of them have same concept
// console.log(false !== 0);
// console.log(true !== 1);


//if statements
//checking for single condition
// if(the condition) {
//   run this code
// }
// //Example
// if("Tom" === "Tom") {
//   console.log('Yay Tom');
// }
//
// //Example 2
// if("Jack" === "Tom") {
//   console.log("No Way");
// }

// Example 3
// let time = 0700
// if(time === 0700) {
//   console.log("Good Morning");
// }

// if else
// checks for 2 conditions
// let score = 7;
// if(score === 10) {
//   console.log("Grade A");
// } else {
//   console.log("Grade B");
// }

// if else statement
// checks for more than 2 conditions
// doesn't matter how many else if statements you have
// let score = 9;
// if(score === 10) {
//   console.log('Grade A');
// } else if (score === 9) {
//   console.log("Grade B");
// } else if (score === 8) {
//   console.log("Grade C");
// } else if (score === 7) {
//   console.log("Grade D");
// } else {
//   console.log("Grade F");
// }


//switch statement
//checking for single condition
// let score = 10;
// switch(score) {
//   case 10:
//     console.log('Grade A');
// }

// default statement => checking for 2 conditions
// let score = 9;
// switch(score) {
//   case 10:
//     console.log("Grade A");
//     break;
//   default:
//     console.log("Grade B");
// }


//switch default
// checking for more than 2 conditions
// let score = 8;
// switch(score) {
//   case 10:
//     console.log("Grade A");
//     break;
//   case 9:
//     console.log("Grade B");
//     break;
//   case 8:
//     console.log("Grade C");
//     break;
//   case 7:
//     console.log("Grade D");
//     break;
//   default:
//     console.log("Grade F");
// }


//The Ternary Operator
//Only checks for 2 conditions
// Want to use when there's only 2 conditions
// let score = 9;
// score === 10 ? console.log("Grade A") : console.log("Grade B");


//Logical Opertors
//Modify other boolean expressions
//The logical AND Operator (&&)

// Example 1
// if(10 > 5 && 3 > 4) {
//   console.log("Success");
// }
//
// // Example 2
// let age = 11;
// if(age >= 1 && age <= 12) {
//   console.log('minor');
// } else if (age >= 13 && age <= 19) {
//   console.log('teenager');
// } else {
//   console.log("adult");
// }



// The logical OR (||) Operator
// Example 1
// if(2 > 3 || 5 < 7) {
//   console.log("Success");
// }
//
// // Example 2
// if(10 > 8 || 8 > 5) {
//   console.log("Success");
// }

// The logical NOT (!) operator
// Returns true if any expression is false
let temp = 22;
if(!(temp === 20)) {
  console.log("Really!!!");
}
