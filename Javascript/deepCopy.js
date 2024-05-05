// file to do deep copying an object

const person = {
  name: "Nischal",
  age: 22,
};

const deepCopy = JSON.parse(JSON.stringify(person));
deepCopy.name = "Vishnu";

console.log(person);
console.log(deepCopy);
