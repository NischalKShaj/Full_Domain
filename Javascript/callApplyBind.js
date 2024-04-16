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
