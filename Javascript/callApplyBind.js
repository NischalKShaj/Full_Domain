// program to demonstrate call apply bind
const person1 = {
  name: "Nischal",
  domain: "Mern",
  greet: function (message) {
    console.log(`${message},I am ${this.name}, my domain is${this.domain} `);
  },
};

const person2 = {
  name: "Vishnu",
  domain: "Mean",
};

person1.greet.call(person1, "Hi");
person1.greet.apply(person2, ["Hello"]);

const welcome = person1.greet.bind(person1, "Hey");
welcome();

// another example for call apply and bind
const car = {
  name: "Roles Royees",
  color: "white",
  displayInfo: function (milage) {
    console.log(
      `This is ${this.name} of the color${this.color} and has milage of ${milage}`
    );
  },
};

const anotherCar = {
  name: "Pagani",
  color: "black",
};

// using call
car.displayInfo.call(car, "75kmph");

// using apply
car.displayInfo.apply(anotherCar, ["40kmph"]);

// using bind

const display = car.displayInfo.bind(anotherCar);
display("45kmph");
