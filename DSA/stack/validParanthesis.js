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
      console.log("stack undeflow");
      return false;
    }
    let popped = this.top.value;
    this.top = this.top.next;
    return popped;
  }
  isValid(paranthesis) {
    const stack = new Stack();
    for (let i = 0; i < paranthesis.length; i++) {
      let char = paranthesis[i];
      if (char === "(" || char === "[" || char === "{") {
        stack.push(char);
      } else if (char === ")" || char === "]" || char === "}") {
        let popped = stack.pop();
        if (
          (popped === "(" && char !== ")") ||
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
const input = "[]";
console.log(stack.isValid(input));
