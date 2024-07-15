// Object Literals

const person = {
  name: "Alice",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.greet());

const book = {
  name: "js_deep_dive",
  pages: 30,
  benifit() {
    console.log(
      "Learning one think deeply is more suitable then going through of several pages designs"
    );
  },
};

// console.log(book);

// Constructor Functions
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const developer = new Person("k-adi", 22);

console.log(developer);
