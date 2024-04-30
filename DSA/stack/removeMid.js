// file to show how to remove the middle element from the stack

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
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
  pop() {
    if (this.top === null) {
      console.log("stack underflow");
      return false;
    }
    this.top = this.top.next;
  }
  mid() {
    const middle = Math.floor(this.length / 2);
    this.removeMid(middle);
  }
  removeMid(middle) {
    if (this.top === null) {
      console.log("stack underflow");
      return false;
    }
    let current = this.top;
    let index = 0;
    while (index < middle - 1) {
      current = current.next;
      index++;
    }
    if (current === null) {
      console.log("node not found");
      return false;
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
stack.mid();
stack.display();
