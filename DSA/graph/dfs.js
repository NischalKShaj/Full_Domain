// file to show the dfs of a graph

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
  dfs(startIndex) {
    let visited = new Set();
    this.traversal(startIndex, visited);
  }
  traversal(startIndex, visited) {
    const stack = [startIndex];
    visited.add(startIndex);
    while (stack.length > 0) {
      let current = stack.pop();
      console.log(current);
      for (const neighbor of this.vertices.get(current)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      }
    }
  }
  display() {
    let res = "";
    for (const [vertex, edge] of this.vertices) {
      res += `${vertex}:${edge.join(",")}\n`;
    }
    return res;
  }
}

const graph = new Graph();
graph.insert(3, 5, true);
graph.insert(3, 4, true);
graph.insert(5, 6, false);
console.log(graph.display());
graph.dfs(5);
