// file to demonstrate the working of weekMap

const weakMap = new WeakMap();

const obj1 = {};
const obj2 = {};

// setting the value for the weakMap()
weakMap.set(obj1, "value1");
weakMap.set(obj2, "value2");

// getting the value of the weakMap()
console.log(weakMap.get(obj1));
console.log(weakMap.get(obj2));

// deleting one of the value
weakMap.delete(obj2);
console.log(weakMap.get(obj2));
