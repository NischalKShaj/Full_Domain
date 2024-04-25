// file to show how to add a list in the linked list
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
  display() {
    let currentValue = this.head;
    while (currentValue !== null) {
      console.log(currentValue.value);
      currentValue = currentValue.next;
    }
  }
}

const list = new LinkedList();
list.addValue(4);
list.addValue(5);
list.addValue(7);
list.addValue(2);
list.addValue(1);
list.display();
