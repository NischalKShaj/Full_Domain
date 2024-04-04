// demonstrating the object methods

const obj = [
  {
    name: "Nischal",
    age: 22,
    domain: "MERN",
  },
  {
    name: "Vishnu",
    age: 23,
    domain: "CS",
  },
];

// object.entrires
console.log(Object.entries(obj));

// object.keys
console.log(Object.keys(obj));

// object.value
console.log(Object.values(obj));

// object.seal
Object.seal(obj);
obj[0].domain = "Python";
console.log(obj);

// object.freeze
Object.freeze(obj);
obj.name = "Vishnu";
console.log(obj);

// showing the values using loop
for (let i = 0; i < obj.length; i++) {
  for (let key in obj[i]) {
    console.log(obj[i][key]);
  }
}
