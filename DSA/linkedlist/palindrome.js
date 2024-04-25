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
  addValue(value) {
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
      return true;
    }
    let current = this.head;
    let arr = [];
    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      if (arr[left] !== arr[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
}

const list = new LinkedList();
list.addValue(1);
list.addValue(0);
list.addValue(3);
list.addValue(2);
list.addValue(1);
console.log(list.isPalindrome());
