// Classes and Inheritance
// 3.1. Defining Classes

// Class Declaration
// Constructor Method
// Methods

class Animels {
  constructor(name) {
    this.name = name;
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
