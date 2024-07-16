//  Creating and Accessing Arrays

let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);
console.log(fruits[0]); // index wise access
console.log(fruits[1]);
console.log(fruits[2]);

// modifying element
fruits[1] = "Mango";
console.log(fruits);

// Array Methods

// Adding Elements:

// push(): Adds an element to the end of the array.
// unshift(): Adds an element to the beginning of the array.

fruits.push("Graps");
console.log(fruits);
fruits.unshift("WaterMellon");
console.log(fruits);

// Removing Elements:
// pop(): Removes the last element of the array.
// shift(): Removes the first element of the array.

fruits.pop("Graps");
console.log(fruits);
fruits.shift("WaterMellon");
console.log(fruits);

// Finding Elements:
// indexOf(): Returns the index of the first occurrence of a value.
// includes(): Checks if a value is present in the array, if includes then return true else false.

console.log(fruits.indexOf("Mango"));
console.log(fruits.includes("Apple"));
console.log(fruits.includes("Graps"));
console.log("----");

// Iterating Over Arrays:
// forEach(): Executes a provided function once for each array element.
// map(): Creates a new array with the results of calling a provided function on every element in the array.

fruits.forEach((fruit) => {
  console.log(fruit);
});

const upperCaseFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperCaseFruits);

// Concatenation:
// concat(): Merges two or more arrays.

let vegetables = ["Carrot", "Potato"];
let food = fruits.concat(vegetables);
console.log(food);

// Slicing and Splicing:
// slice(): Returns a shallow copy of a portion of an array into a new array object.
// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

let slicedFruits = fruits.slice(0, 2);
console.log(slicedFruits);

fruits.splice(1, 1, "Kiwi");
console.log(fruits); // ['Apple', 'Kiwi', 'Orange']

// Basic Array Operations:
// Create an array of numbers and find the sum of all elements in the array.

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((total, num) => total + num);
console.log(sum); // 15

// array object
let books = [
  { title: "1984", author: "George Orwell", date: "12-mar-1998" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", date: "12-mar-1999" },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    date: "12-mar-1993",
  },
];

let bookTitles = books.map((book) => book.title);
console.log(bookTitles); // ['1984', 'To Kill a Mockingbird', 'The Great Gatsby']

books.forEach((book) => {
  console.log(`${book.title} is published by ${book.author} on ${book.date}`);
});
// 1984 by George Orwell
// To Kill a Mockingbird by Harper Lee
// The Great Gatsby by F. Scott Fitzgerald
