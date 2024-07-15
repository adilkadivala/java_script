// Classes and Inheritance
// 3.1. Defining Classes

// Class Declaration
// Constructor Method
// Methods

class Animels {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  speak() {
    console.log(`${this.name} make a noice`);
  }
}
class Dog extends Animels {
  speak() {
    console.log(`${this.name} is bark`);
  }
}

const dog = new Dog("Rox");
dog.speak();

// another one
class Houses {
  constructor(weidth, height) {
    let x = (this.weidth = weidth);
    let y = (this.height = height);
    let z = x + y;
    console.log(z);
  }

  facility() {
    console.log("Ac Room");
  }
}

class MyHouse extends Houses {
  facility() {
    console.log("Non Ac");
  }
}

const house = new Houses(25, 23);
house.facility();

const villageHouse = new MyHouse(4, 6);
villageHouse.facility();

// get and set functions
class Persone {
  constructor(name, age, property) {
    this._name = name;
    this._age = age;
    this._property = property;
  }

  own() {
    console.log(`He or She Owns ${this._property} `);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.log("Age must be a Positive number");
    }
  }
}

class Student extends Persone {
  own() {
    console.log(`${this._name} Has a ${this._property}`);
  }
}

const policman = new Persone("Wood", 35, "car");
console.log(policman);
console.log(policman.own());

const student = new Student("Mark", 10, "Bag");
console.log(student.own());
