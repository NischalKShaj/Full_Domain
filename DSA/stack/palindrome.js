// palindrome

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.top === null) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
  }
  isPalindrome() {
    if (this.top === null) {
      console.log("stack underflow");
      return null;
    }
    let palindrome = [];
    let current = this.top;
    while (current !== null) {
      palindrome.push(current.value);
      current = current.next;
    }
    let left = 0;
    let right = palindrome.length - 1;
    while (left < right) {
      if (palindrome[left] !== palindrome[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
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
stack.push(1);
stack.display();
console.log(stack.isPalindrome());
