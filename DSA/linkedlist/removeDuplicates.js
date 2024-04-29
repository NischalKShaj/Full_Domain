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
  insert(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }
  removeDuplicate() {
    if (this.head === null) {
      console.log("invalid list ");
      return false;
    }
    let prev = null;
    let current = this.head;
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
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(3);
list.insert(4);
list.insert(5);
list.display();
list.removeDuplicate();
console.log("list after removing duplicates");
list.display();
