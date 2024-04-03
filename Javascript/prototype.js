//  program to show the implementation of prototype

const vechile = {
  genere: "bike or scooter",
  wheels: 2,
  fuel_type: "petrol",
};

function Bike(name, milage) {
  this.name = name;
  this.milage = milage;
}
Bike.prototype = vechile;

const bike = new Bike("splender", "50mph");

const bikeprototype = Object.getPrototypeOf(bike);
console.log(bikeprototype);
console.log(bike);

const newPrototype = {
  made: "Japan",
  waranty: "2years",
};

Object.setPrototypeOf(bike, newPrototype);
console.log(bike);
