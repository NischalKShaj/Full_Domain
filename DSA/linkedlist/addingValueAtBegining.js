// adding value at the begining of the linked list
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
  addBeg(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
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
list.addValue(5);
list.display();
list.addBeg(0);
list.display();
