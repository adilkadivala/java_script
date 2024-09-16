class SuperHero {
  superheroname;

  constructor() {
    // constructor is a defined method for inserting initial value
  }

  getName() {
    return this.superheroname;
  }

  updateName(name) {
    const newName = name;
    return (this.superheroname = newName);
  }
}

const mySuperHero = new SuperHero();
mySuperHero.superheroname = "Adil";
console.log(mySuperHero.superheroname, "initial");
console.log(mySuperHero.getName(), "getMethod");
console.log(mySuperHero.updateName("Amil"), "update");
console.log(mySuperHero.superheroname, "initial update");
