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

// function to show the working of generator funciton with hof
function* manipulateArray(array) {
  yield* array.map((value) => value * 2);
}

const arr = [1, 2, 3, 4, 5];
const generated = manipulateArray(arr);
for (const value of generated) {
  console.log(value);
}

// working with for loop
function* testing() {
  for (let i = 0; i < Infinity; i++) {
    yield i;
  }
}

const gene = testing();
console.log(gene.next().value);
console.log(gene.next().value);
console.log(gene.next().value);
console.log(gene.next().value);
console.log(gene.next().value);

//=====NOTE : with for...of and hof iteration IMPLICIT and in case of while,for loop iteration is EXPLICIT=====//
