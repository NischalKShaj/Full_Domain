// file to show how to add value to the middle of the list
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
    this.length = 0;
  }
  addValue(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }
  middle(value) {
    const mid = Math.floor(this.length / 2);
    this.addAtMid(mid, value);
  }
  addAtMid(mid, value) {
    const newNode = new Node(value);
    let current = this.head;
    let prev = null;
    let index = 0;
    while (index < mid) {
      prev = current;
      current = current.next;
      index++;
    }
    newNode.next = current;
    prev.next = newNode;
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
list.addValue(4);
list.addValue(5);
list.display();
list.middle(3);
list.display();
