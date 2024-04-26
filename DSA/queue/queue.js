// file to show the basics of the queue

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.front === null) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }
  dequeue() {
    if (this.front === null) {
      console.log("queue underflow");
      return false;
    }
    this.front = this.front.next;
    if (this.front === null) {
      this.rear = null;
    }
  }
  display() {
    let current = this.front;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.display();
queue.dequeue();
queue.display();
