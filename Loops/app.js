// // LOOPS
// // loops repeat code while reducing the number of lines of code

// // For Loops
// //starting point, end point, incrementation

// //Exmaple 1
// for(let a = 1; a <= 5; a++) {
//     console.log('I am a For loop', a); 
//     //'a' lets console print out each line
// }


// //Example 2
// //get even numbers from 0 to 19
// // += 2, increments by 2
// for(let b = 0; b <= 19; b += 2) {
//     console.log(b);
// }

// //Example 3
// //get odd numbers from 0 to 19
// // += 3, increments by 3
// for(let b = 1; b <= 19; b += 2) {
//     console.log(b);
// }

// //Example 4
// //get every 3rd number from 0-19
// for(let i = 0; i <= 19; i += 3){
//     console.log(i);
// }



// LOOPS
// Why?
// B/c arrays are a collection of data
// if you want to grab that data each time
// -1 Why?
// length starts from 1, indices in JS start from 0
// const numbers = [25, 65, 95, 45, 135];
// for(let e = 0; e < numbers.length; e++){
//     console.log(e, numbers[e]);
//     console.log(numbers[e]);
// }


// // Looping through objects nested within arrays
// const favBooks = [
//     {
//         bookName: 'The Kite Runner',
//         author: 'Khaled Hosseini',
//     },
//     {
//         bookName: 'The Theory of Everything',
//         author: 'Steven Hawking',
//     },
//     {
//         bookName: 'Moby Dick',
//         author: 'Herman Melville',
//     },
// ];
// console.log(favBooks);
// for(let i = 0; i < favBooks.length; i++) {
//     // console.log(i);
//     // console.log(i, favBooks[i]);
//     console.log(favBooks[i]);
// }




//WHILE LOOPS
// declare a variable
// while condition is true, the code runs,
// then increment

// //Example 1
// let k = 1;
// while(k <= 10) {
//     console.log(k)
//     k++;
// };


// //Iterate through Array with while loop
// //Exmaple 2
// const colors = ['red', 'green', 'blue']
// let i = 0;
// while(i < colors.length) {
//     console.log(i, colors[i]);
//     i++;
// };

