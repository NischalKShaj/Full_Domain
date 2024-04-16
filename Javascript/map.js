// function for using map
const temprature = [3, 2, 4, 6, 76, 5, 23];

const farenheight = temprature.map((value) => {
  return (value * 9) / 5 + 32;
});

console.log(farenheight);

const product = [
  { id: 1, name: "apple", price: 100 },
  { id: 2, name: "orange", price: 80 },
  { id: 3, name: "banana", price: 60 },
];

const productname = product.map((product) => product.name);
console.log(productname);
const price = product.map((product) => product.price);
console.log(price);
