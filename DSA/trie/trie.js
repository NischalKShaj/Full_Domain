// file to show the implementation of trie

class Node {
  constructor() {
    this.children = new Map();
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new Node());
      }
      node = node.children.get(char);
    }
    node.end = true;
    node.children.set("*", new Node());
  }
  display() {
    let res = [];
    this.traverse(this.root, "", res);
    return res.join("\n");
  }
  traverse(node, current, result) {
    if (node.end) {
      result.push(current);
    }
    for (const [char, childnode] of node.children) {
      this.traverse(childnode, current + char, result);
    }
  }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("ant");
trie.insert("ape");
console.log(trie.display());
