// file to find the height of the tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
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
  //   function to calculate the height of the tree
  getHeight(node) {
    if (node === null) {
      return -1;
    } else {
      let leftChild = this.getHeight(node.left);
      let rightChild = this.getHeight(node.right);

      return Math.max(leftChild, rightChild) + 1;
    }
  }
  inOrder(node, callback) {
    if (node !== null) {
      this.inOrder(node.left, callback);
      callback(node.value);
      this.inOrder(node.right, callback);
    }
  }
}

const tree = new Tree();
tree.insert(3);
tree.insert(4);
tree.insert(7);
tree.insert(8);
tree.insert(6);
let res = [];
tree.inOrder(tree.root, (value) => {
  res.push(value);
});
console.log(res);
let max_height = tree.getHeight(tree.root);
console.log(max_height);
