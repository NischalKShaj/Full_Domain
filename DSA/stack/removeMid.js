// file to show how to remove the middle element from the stack

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.length = 0;
    this.top = null;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.top === null) {
      this.top = newNode;
      this.length++;
    } else {
      newNode.next = this.top;
      this.top = newNode;
      this.length++;
    }
  }
  middle() {
    const mid = Math.floor(this.length / 2);
    this.popMid(mid);
  }
  popMid(mid) {
    if (this.top === null) {
      console.log("stack underflow");
      return false;
    }
    let index = 0;
    let current = this.top;
    while (index < mid - 1) {
      current = current.next;
      index++;
    }
    if (current === null) {
      console.log("value not found in stack");
      return;
    }
    current.next = current.next.next;
  }
  display() {
    let current = this.top;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.display();
stack.middle();
stack.display();
