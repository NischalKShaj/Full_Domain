// file to show the implementation of factory function

function createPerson(name) {
  return {
    name: name,
    greet: function () {
      console.log(`Hello my name is ${this.name}`);
    },
  };
}

const person1 = createPerson("John");
const person2 = createPerson("Alice");
person1.greet();
person2.greet();

// note:dont use arrow function "this" will point to the windows that is using this.name will be undefined //
