// file to check whether the given input is valid parentheses

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
  pop() {
    if (this.top === null) {
      console.log("stack underflow");
      return;
    }
    const poppedVal = this.top.value;
    this.top = this.top.next;
    return poppedVal;
  }
  validParentheses(parentheses) {
    const stack = new Stack();
    for (let i = 0; i < parentheses.length; i++) {
      let char = parentheses[i];
      if (char === "(" || char === "[" || char === "{") {
        stack.push(char);
      } else if (char === ")" || char === "]" || char === "}") {
        let popped = stack.pop();
        if (
          (popped === "(" && char !== "(") ||
          (popped === "[" && char !== "]") ||
          (popped === "{" && char !== "}")
        ) {
          return false;
        }
      }
    }
    return stack.top === null;
  }
}

const stack = new Stack();
console.log(stack.validParentheses("[]"));
