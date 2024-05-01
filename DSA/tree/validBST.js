// file to show whether the given tree is valid or not

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertChild(this.root, node);
    }
  }
  insertChild(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertChild(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertChild(root.right, node);
      }
    }
  }
  // checking valid binary tree
  isBST() {
    let prev = -Infinity;
    let valid = true;
    function isValid(node) {
      if (node !== null && valid) {
        isValid(node.left);
        if (node.value <= prev) {
          valid = false;
          return;
        }
        prev = node.value;
        isValid(node.right);
      }
    }
    isValid(this.root);
    return valid;
  }
  inOrderTraversal(node, callback) {
    if (node !== null) {
      this.inOrderTraversal(node.left, callback);
      callback(node.value);
      this.inOrderTraversal(node.right, callback);
    }
  }
}

const tree = new BST();
tree.insert(1);
tree.insert(5);
tree.insert(2);
tree.insert(7);
tree.insert(8);
console.log(tree.isBST());
let res = [];
tree.inOrderTraversal(tree.root, (value) => {
  res.push(value);
});
console.log(res);
