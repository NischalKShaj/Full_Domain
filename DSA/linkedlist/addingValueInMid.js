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
    this.size = 0;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.size++;
    }
  }
  mid(value) {
    const middle = Math.floor(this.size / 2);
    this.insertAtMid(value, middle);
  }
  insertAtMid(value, middle) {
    const newNode = new Node(value);
    if (this.head === null) {
      console.log("the list is invalid");
      return false;
    }
    let prev = null;
    let current = this.head;
    let index = 0;
    while (index < middle) {
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
list.insert(1);
list.insert(2);
list.insert(4);
list.insert(5);
list.insert(6);
list.display();
list.mid(3);
list.display();
