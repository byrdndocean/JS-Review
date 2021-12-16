// Object Literal
// store key and value pairs
// key and value pairs are called properties
// allows us to store more complex data
// const address = {
//     country: 'Turkey',
//     city: 'Istanbul'
// };
// console.log(address);

// // Accessing the object data
// // Method 1 Dot Notation
// // Doesn't work if more than 1 word
// // like city: 'Istanbul', 'City2'
// // like "Full Address"
// console.log(address.city, "is very beautiful");
// // Istanbul is very beautiful
// console.log(`${address.country} has astounding scenery`);
// // Turkey has astounding scenery


// // Method 2 Array brackets
// // these are used for a number of properties and strings
// // of multiple words as object properties
// const person = {
//     name: 'Sam',
//     age: 31,
//     'Full Address': "Athens, Greece",
//     job: 'Captain America',
//     1985: "DoB"
// };

// console.log(person);
// //let's say we want the age
// // whenever you accessing them through brackets use quotes
// // ["age"] otherwise it'll get access a variable age
// console.log(person["age"]); // we get 31
// console.log(person["1985"]);    //we get DoB
// console.log(person['Full Address']); //we get Athens, Greece




// // Modifying Objects
// // meaning changing the object data
// const moviesRatings = {
//     Deadpool: 9.1,
//     "X-Men Days of Future Past": 7.9,
//     "Thor Ragnorak": 9.4,
//     "Wonder Woman": 9,
//     Superman: 9
// };

// moviesRatings["Deadpool"] = 9.3;
// moviesRatings["Superman"] = 8.5;

// //console.log(moviesRatings);
// // //changes the object data


// // Updating Objects
// // can create more key-value pairs
// moviesRatings['The Winter Soldier'] = 9.8;
// moviesRatings['Justice League Apocalypse'] = 9.2;
// console.log(moviesRatings);
// // added new key-value pair



// // Nesting
// // objects within objects
// const user = {
//     thunderBolt37: {
//         name: 'Ross',
//         job: 'classified'
//     },
//     paygrade: "A",
// };
// console.log(user);
// console.log(user['thunderBolt37'].name);
// // Ross
// console.log(user['thunderBolt37']["job"]);
// // classified




// // Nesting Arrays within Objects
// const user = {
//     thunderBolt37: {
//         name: 'Ross',
//         job: 'classified',
//     },
//     paygrade: "A",
//     hobbies: ['golf', 'walk', "give out orders"],
// };
// console.log(user);
// console.log(user['hobbies']);
// console.log(user['hobbies'][0]);    //golf


// Nesting Objects within Arrays
const user = [
    {
        name: 'Tony',
        job: 'complicated'
    },
    'compassionate',
    ['making suits', 'destroying suits'],
];
console.log(user);
console.log(user[0]);
console.log(user[0]['job']);
console.log(`${user[0]['job']} is tony's job`);

