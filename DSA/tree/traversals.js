// file to show the tree travesals inorder preorder and postorder

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
  // in-order traversal
  inOrder(node, callback) {
    if (node !== null) {
      this.inOrder(node.left, callback);
      callback(node.value);
      this.inOrder(node.right, callback);
    }
  }
  // pre-order traversal
  preOrder(node, callback) {
    if (node !== null) {
      callback(node.value);
      this.preOrder(node.left, callback);
      this.preOrder(node.right, callback);
    }
  }
  // post-order traversal
  postOrder(node, callback) {
    if (node !== null) {
      this.postOrder(node.left, callback);
      this.postOrder(node.right, callback);
      callback(node.value);
    }
  }
}

const tree = new BST();
tree.insert(3);
tree.insert(4);
tree.insert(9);
tree.insert(6);
tree.insert(8);
let res = [];
let res1 = [];
let res2 = [];
tree.inOrder(tree.root, (value) => {
  res.push(value);
});
console.log(res);
tree.preOrder(tree.root, (value) => {
  res1.push(value);
});
console.log(res1);
tree.postOrder(tree.root, (value) => {
  res2.push(value);
});
console.log(res2);
