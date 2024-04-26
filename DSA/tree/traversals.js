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
  //  inorder traversal
  inorder(node, callback) {
    if (node !== null) {
      this.inorder(node.left, callback);
      callback(node.value);
      this.inorder(node.right, callback);
    }
  }
  //  preorder traversal
  preorder(node, callback) {
    if (node !== null) {
      callback(node.value);
      this.preorder(node.left, callback);
      this.preorder(node.right, callback);
    }
  }
  // postorder traversal
  postorder(node, callback) {
    if (node !== null) {
      this.postorder(node.left, callback);
      this.postorder(node.right, callback);
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
tree.inorder(tree.root, (value) => {
  res.push(value);
});
console.log(res);
tree.preorder(tree.root, (value) => {
  res1.push(value);
});
console.log(res1);
tree.postorder(tree.root, (value) => {
  res2.push(value);
});
console.log(res2);
