// file to show how to remove  a value from the linked list
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
  //   removing specific value and tail
  delete(value) {
    if (this.head === null) {
      console.log("list empty");
      return;
    }
    let current = this.head;
    let prev = null;
    while (current !== null && current.value !== value) {
      prev = current;
      current = current.next;
    }
    if (current === null) {
      console.log("node not found");
      return;
    }
    prev.next = current.next;
  }
  //   removing head
  deleteHead() {
    if (this.head === null) {
      console.log("list empty");
      return;
    }
    this.head = this.head.next;
  }
  // removing the middle element
  mid() {
    let middle = Math.floor(this.length / 2);
    this.deleteMid(middle);
  }
  deleteMid(middle) {
    if (this.head === null && middle > this.length) {
      console.log("invalid");
      return;
    }
    if (middle === 0) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let index = 0;
    while (index < middle - 1) {
      current = current.next;
      index++;
    }
    if (current === null) {
      console.log("node not found");
      return;
    }
    current.next = current.next.next;
  }
  // removing value from a specific position
  deleteSpecific(pos) {
    if (this.head === null) {
      console.log("list empty");
      return;
    }
    if (pos === 0) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let index = 0;
    let prev = null;
    while (current !== null && index < pos) {
      prev = current;
      current = current.next;
      index++;
    }
    if (current == null) {
      console.log("node not found");
      return;
    }
    prev.next = current.next;
  }
  display() {
    let curr = this.head;
    while (curr !== null) {
      console.log(curr.value);
      curr = curr.next;
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
// list.delete(5);
// list.display();
// list.deleteHead();
// list.display();
// list.mid();
// list.display();
list.deleteSpecific(1);
list.display();
