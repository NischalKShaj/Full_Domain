// funciton to show the implementation of a generator function
function* generator() {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}

const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
