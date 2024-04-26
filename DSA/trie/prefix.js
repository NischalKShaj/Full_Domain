// file to implement prefix search on the trie

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
  prefix(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return node.end || node.children.size >= 0;
  }
  display() {
    let res = [];
    this.travrese(this.root, "", res);
    return res.join("\n");
  }
  travrese(node, current, result) {
    if (node.end) {
      result.push(current);
    }
    for (const [char, childnode] of node.children) {
      this.travrese(childnode, current + char, result);
    }
  }
}

const trie = new Trie();
trie.insert("Apple");
trie.insert("Ant");
trie.insert("App");
console.log(trie.display());
console.log(trie.prefix("App"));
console.log(trie.prefix("ant"));
