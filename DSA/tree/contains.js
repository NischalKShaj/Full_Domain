// file to show whether a value is present in the tree or not

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
      return;
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
  contains(value) {
    let current = this.root;
    while (current !== null) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  inorder(node, callback) {
    if (node !== null) {
      this.inorder(node.left, callback);
      callback(node.value);
      this.inorder(node.right, callback);
    }
  }
}

const tree = new BST();
tree.insert(1);
tree.insert(6);
tree.insert(3);
tree.insert(7);
tree.insert(21);
console.log(tree.contains(7));
let res = [];
tree.inorder(tree.root, (value) => {
  res.push(value);
});
console.log(res);
