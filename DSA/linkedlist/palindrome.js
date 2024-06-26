// file to check whether the list is palindrome or not

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
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  isPalindrome() {
    if (this.head === null) {
      console.log("invalid list");
      return false;
    }
    let current = this.head;
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

const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(2);
list.insert(1);
console.log(list.isPalindrome());
