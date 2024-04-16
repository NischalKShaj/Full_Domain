// file to show the example for weakSet()

const weakSet = new WeakSet();

const obj1 = {};
const obj2 = {};

// adding value to the weakSet()
weakSet.add(obj1);
weakSet.add(obj2);

// checking whether the values are present in the weakSet()
console.log(weakSet.has(obj1));
console.log(weakSet.has(obj2));

// removing value from the weakSet
weakSet.delete(obj1);
console.log(weakSet.has(obj1));
