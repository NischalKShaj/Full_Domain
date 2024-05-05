// file to show the usage of constructor to create the objects

function CreatePersons(name) {
  this.name = name;
  this.greet = function () {
    console.log(`Hi i am ${this.name}`);
  };
}

CreatePersons.prototype.welcome = function () {
  console.log(`welcome ${this.name}`);
};

const person1 = new CreatePersons("Nischal");
const person2 = new CreatePersons("Vishnu");
person1.greet();
person2.welcome();

// using class to show the above example
class CreatePersons {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const person3 = new CreatePersons("Charlie");
person3.greet();
