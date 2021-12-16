// //Array Literal
// //Collection of Data
// // Arrays are not objects, they can behave like objects
// // Called array methods b/c they are called upon arrays
// let numbers = [1, 2, 3, 4, 5];
// let colors = ['red', 'green', 'blue'];
// let mixed = ['yellow', 45, null, undefined, NaN, true];
// console.log(numbers);
// console.log(colors);
// console.log(mixed);

// // Accessing a specific value of an index
// // console.log(colors[1]);
// // console.log(colors[2]);
// // console.log(mixed[2]);
// numbers[4] = 25;    //chanigng value (5 to 25)
// console.log(numbers);

// // Adding to the end of an array
// //what do we want to add at the end of it? 'Gaming'
// mixed[mixed.length] = 'Gaming';
// console.log(mixed);
// mixed.push('PC');
// console.log(mixed);


// ARRAY METHODS

// SHIFT METHOD
// removes items of an array or values
// from an array from the start
let movies = ['The Lake House', 'Memento']
// console.log(movies);

// movies.shift()
// console.log(movies);

// UNSHIFT METHOD
// adds to the start of an array
// movies.unshift('The Great Gatsby');
// console.log(movies);


// POP METHOD
// removes from the end of an array
// movies.pop()
// console.log(movies);


// PUSH METHOD
// adds to the end of an array
// movies.push('Departed');
// console.log(movies);



// (5) SLICE METHOD
// slice(starting index, ending index)
// makes a copy of original array
// let numbers = [1, 2, 3, 4, 54, 115, 789, 324];
// console.log(numbers);

// let's say we want the starting index to be position 1
// and the ending index position 3
// let num1 = numbers.slice(1, 4);
// console.log(num1);  // we get [2,3,4]
// can do negative #'s as well
// let num1 = numbers.slice(-1);
// console.log(num1);  //we get [324]
// let num1 = numbers.slice(-2);
// console.log(num1);  // we get [789, 324]


// SPLICE METHOD
// changes the original array by
// removing or replacing existing items
// splice(starting index, number of items to be removed)
// let's say start from 0 and remove 4 items

// removing
// let num2 = numbers.splice(0, 4);
// console.log(num2);     //we get [1,2,3,4]
// console.log(numbers);    // we get [54, 115, 789, 324]

// removing and replacing
// let num2 = numbers.splice(0, 2, 111, 222);
// console.log(num2);
// console.log(numbers);
// from [1, 2, 3, 4, 54, 115, 789, 324] to 
// num2 = [1,2]
// numbers = [111, 222, 3, 4, 54, 115, 789, 324]
// we replaced 1st 2 index with 111 and 222


// adding
// let num2 = numbers.splice(2, 0, 111, 222);
// // if we make the 2nd number 0 then none of the items
// // from the original array is going to be removed
// console.log(num2);
// console.log(numbers);
//num2 = 0
//numbers = [1, 2, 111, 222, 3, 4, 54, 115, 789, 324]



// INCLUDES METHOD
// determines wether a certain array has that element
// returning true or false
const moods1 = ["happy", "sad", "satisfied"];
// console.log(moods1.includes('happy'));
// // we get true
// console.log(moods1.includes('frustrated'));
// // we get false



// CONCAT METHOD
// combines or merges 2 arrays
const moods2 = ["frustrated", "uncertain", "relaxed"];
// console.log(moods1.concat(moods2));



// REVERSE METHOD
// reverses an array
// console.log(moods1.reverse());


// JOIN METHOD
//converts an array to a string
// console.log(moods2.join());
// //frustrated,uncertain,relaxed
// console.log(moods2.join(""));
// //frustrateduncertainrelaxed
// console.log(moods2.join(" "));
// //frustrated uncertain relaxed
// console.log(moods2.join("-"));
// //frustrated-uncertain-relaxed


// // NESTING
// // we can have an array inside of another array
// // we separate the items with a comma
// const favs = [
//     ['Endgame', 'Infinity Wars', 'Civil Wars', 'Ironman', 'Thor'],
//     ['Batman', "Superman", 'Wonder Woman'],
//     ['Spiderman', 'Antman', 'Hulk', 'Hawkeye'],
//     ['Nolan', 'Snyder', 'Reeves'],
//     ['DiCaprio', 'Hardy', 'Toby', 'Andrew']
// ];

// console.log(favs);
// console.log(favs[1]);
// //['Batman', 'Superman', 'Wonder Woman']
// console.log(favs[4][0]);   
// //we get DiCaprio
// console.log(`${favs[3][2]} is directing the new Batman movie`);
// //template lliterals only work with variable names
// //Reeves is directing the new Batman movie



// const moods2 = ["frustrated", "uncertain", "relaxed"];
// // console.log(moods1.concat(moods2));
// We can't redclare moods2 but we did change what's inside

// best practice to use const with arrays and objects
// this keeps are apps from breaking down and bugs

