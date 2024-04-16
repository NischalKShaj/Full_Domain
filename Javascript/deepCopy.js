// file to do deep copying an object

const person = {
  name: "John",
  age: 22,
  address: {
    city: "Trivandrum",
    state: "Kerala",
  },
};

// performing deepcopy
const deepCopy = JSON.parse(JSON.stringify(person));
deepCopy.address.city = "Pathanamthitta";

console.log(deepCopy);
console.log(person);
