// file to show how to remove duplicate from the linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addValue(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  removeDuplicate() {
    if (this.head === null) {
      console.log("list is empty");
      return false;
    }
    let current = this.head;
    let prev = null;
    let set = new Set();
    while (current !== null) {
      if (set.has(current.value)) {
        prev.next = current.next;
      } else {
        set.add(current.value);
        prev = current;
      }
      current = current.next;
    }
  }
  display() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.addValue(1);
list.addValue(2);
list.addValue(3);
list.addValue(3);
list.addValue(4);
list.addValue(5);
list.display();
list.removeDuplicate();
console.log("list after removing duplicates");
list.display();
