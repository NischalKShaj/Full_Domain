// function for using map
const temprature = [3, 2, 4, 6, 76, 5, 23];

const farenheight = temprature.map((value) => {
  return (value * 9) / 5 + 32;
});

console.log(farenheight);
