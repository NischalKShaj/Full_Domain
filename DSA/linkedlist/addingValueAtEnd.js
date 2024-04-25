// adding value at the end of the linked list\
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
    const newnode = new Node(value);
    if (this.head === null) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      this.tail.next = newnode;
      this.tail = newnode;
    }
  }
  addAtEnd(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
  }
  display() {
    let currentValue = this.head;
    while (currentValue !== null) {
      console.log(currentValue.value);
      currentValue = currentValue.next;
    }
  }
}
const list = new LinkedList();
list.addValue(1);
list.addValue(2);
list.addValue(3);
list.addValue(4);
list.display();
list.addAtEnd(5);
list.display();
