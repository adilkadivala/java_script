// Conditional statements  && looping

// Conditional statements
let number = 10;
if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
}
fizzBuzz(15); // FizzBuzz
fizzBuzz(3); // Fizz
fizzBuzz(5); // Buzz
fizzBuzz(7); // 7

// switch Conditional

let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Friday":
    console.log("End of the work week.");
    break;
  default:
    console.log("Midweek.");
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("For loop ends ");

let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);

// for...in loop (used for objects)
const user = { name: "Alice", age: 30, city: "New York" };
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

// for...of loop (used for arrays and other iterable objects)
const arr = [1, 2, 3, 4, 5];
for (let value of arr) {
  console.log(value);
}
