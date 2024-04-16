// file to show the useage of constructor to create the objects

function CreatePerson(name) {
  this.name = name;
  this.greet = function () {
    console.log(`Hello my name is ${this.name}`);
  };
}

// creating function using prototype
CreatePerson.prototype.welcome = function () {
  console.log(`Welcome ${this.name}`);
};

const person1 = new CreatePerson("Alice");
const person2 = new CreatePerson("Bob");
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
