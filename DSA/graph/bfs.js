// file to show the implementation of bfs

class Graph {
  constructor() {
    this.vertices = new Map();
  }
  addVertices(data) {
    if (!this.vertices.has(data)) {
      this.vertices.set(data, []);
    }
  }
  insert(vertex, edge, bidirectional = true) {
    if (!this.vertices.has(vertex)) {
      this.addVertices(vertex);
    }
    if (!this.vertices.has(edge)) {
      this.addVertices(edge);
    }
    this.vertices.get(vertex).push(edge);
    if (bidirectional) {
      this.vertices.get(edge).push(vertex);
    }
  }
  display() {
    let res = "";
    for (const [vertex, neighbour] of this.vertices) {
      res += `${vertex}: ${neighbour.join(", ")}\n`;
    }
    return res;
  }
  bfs(startIndex) {
    const visited = new Set();
    this.traverse(startIndex, visited);
  }
  traverse(startIndex, visited) {
    const queue = [startIndex];
    visited.add(startIndex);
    while (queue.length > 0) {
      let current = queue.shift();
      console.log(current);
      for (const neighbour of this.vertices.get(current)) {
        if (!visited.has(neighbour)) {
          visited.add(neighbour);
          queue.push(neighbour);
        }
      }
    }
  }
}

const graph = new Graph();
graph.insert(3, 5, true);
graph.insert(3, 4, true);
graph.insert(5, 6, false);
console.log(graph.display());
graph.bfs(3);
