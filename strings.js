// // strings!
// // strings share some properties w/ arrays , like the .length property

// const myName = 'Jackie'
// // console.log(myName.length)

// // we can index strings like we do arrays using bracket notation
// // console,log(myName[3])

// // we cannnot however update the string using the indexes 
// myName[3] = 'K'
// console.log(myName)

//Accessing a piece of a string or "substring"
// .substring takes in two arguments:
//1: the index of the starting point
// 2:  the index of the ending point, but excluding the indexes

// console.log(myName.substring(3,5))

// // iterating over strings
// // for (let i = 0; i < myName.length; i++) {
// //     console.log(myName[i])
// // }
// // will throw an error! .reverse is an array method not a string method!
// // myName.reverse()

// // console.log(myName.split(' '))

// //.split('') converts a string into an array , based on the separator(delimiter)
// // If you put an empty string as the separator, it will make each character its own index.
// // If you put a spice inside of a string, it will break the string up into words, and omit the spaces.

// const mySentenece = "The dog jumped over the fence"
// //console.log(mySentenece.split(' '))

// // .reverse() is an array method, and in order to use it on a string, we have to first convert the string into an array
// // reverse a word => array of characters(letters)
// //console.log(myName.split(' ')).reverse())

// //reverses an entire sentence => array of words
// // console.log(mySentenece.split(' ').reverse())

// //joining an array: converting the array into a string 
// //join() takes an argument representing the separator which it will join each index on
// //empty string will join each index
// // " " (space inside a string) will join  all indexes and have a space between them


// //will rejoin string with nothing between each index
// // console.log(myName.split('').reverse().join(''))

// // will rejoin string with spaces between each word
// // console.log(mySentenece.split('').reverse().join(''))

// // will rejoin string w 'x's between each word
// console.log(mySentenece.split('').reverse().join('x'))






//JSON.stringify() converts a value to the JSON notation that the value represents.
// arguments are passed through to up to three arguments but only one argument is required
//JSON.stringify(value)
// JSON.stringify(value, replacer)
// JSON.stringify(value, replacer, space)

// obj is  is a JavaScript object called below in this statement
//JSON.stringify(obj) converts this object into a JSON-formatted string, and the console.log(myJSON) statement will output the JSON string:
const obj = {name: "Lewis", age: 30, city: "London"};
const myJSON = JSON.stringify(obj)

console.log(myJSON);


//Array json.stringify
// const arr = ["Jesmond", "Gill", "Lerena", "Avalon"];
// const myJSON = JSON.stringify(arr);

// console.log (myJSON);
