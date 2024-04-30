// file that demonstrates is the queue palindrome or not

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
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }
  isPalindrome() {
    if (this.front === null) {
      console.log("queue underflow");
      return false;
    }
    let current = this.front;
    let check = [];
    while (current !== null) {
      check.push(current.value);
      current = current.next;
    }
    let left = 0;
    let right = check.length - 1;
    while (left < right) {
      if (check[left] !== check[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);
console.log(queue.isPalindrome());
