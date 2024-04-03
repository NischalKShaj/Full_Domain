// program to demonstrate call apply bind
const person1 = {
  name: "Nischal",
  greet: function (msg) {
    console.log(`${msg}, I am ${this.name}`);
  },
};

const person2 = {
  name: "Vishnu",
};

person1.greet.call(person1, "Hello");

person1.greet.apply(person2, ["Hi"]);

const greet2 = person1.greet.bind(person2);
greet2("Hey");
