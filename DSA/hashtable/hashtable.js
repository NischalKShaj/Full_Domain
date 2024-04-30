// file to show the implementation of hash table

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }
  // hashing function
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }
  // adding the value to the hash table
  addValue(key, value) {
    let index = this.hash(key);
    this.table[index] = value;
  }
  // getting the value according to the key
  getValue(key) {
    let index = this.hash(key);
    return this.table[index];
  }
  remove(key) {
    let index = this.hash(key);
    if (this.table[index] !== undefined) {
      this.table[index] = undefined;
    }
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(`${i} : ${this.table[i]}`);
      }
    }
  }
}

const hash = new HashTable(5);
hash.addValue("name", "Nischal");
hash.addValue("age", 22);
hash.display();
console.log(hash.getValue("age"));
hash.remove("age");
hash.display();
