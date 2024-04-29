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
  insert(value) {
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
  removeVal(value) {
    if (this.head === null) {
      return false;
    }
    let current = this.head;
    let prev = null;
    while (current !== null && current.value !== value) {
      prev = current;
      current = current.next;
    }
    if (current === null) {
      return false;
    }
    prev.next = current.next;
  }
  //   removing head
  removeHead() {
    if (this.head === null) {
      return;
    }
    this.head = this.head.next;
  }
  // removing the middle element
  mid() {
    const mid = Math.floor(this.length / 2);
    this.removeMid(mid);
  }
  removeMid(mid) {
    if (this.head === null) {
      return null;
    }
    let current = this.head;
    let index = 0;
    while (current !== null && index < mid - 1) {
      current = current.next;
      index++;
    }
    if (current === null) {
      return false;
    }
    current.next = current.next.next;
  }
  // removing value from a specific position
  removePos(pos) {
    if (this.head === null) {
      return false;
    }
    let current = this.head;
    let index = 0;
    let prev = null;
    while (index < pos && current !== null) {
      prev = current;
      current = current.next;
      index++;
    }
    if (current === null) {
      return false;
    }
    prev.next = current.next;
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
list.insert(4);
list.insert(5);
list.display();
// list.removeVal(5);
// list.display();
// list.removeHead();
// list.display();
// list.mid();
// list.display();
list.removePos(1);
list.display();
