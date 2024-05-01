// file to implement min heap and remove the min value

class MinHeap {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  heapifyUp() {
    let current = this.heap.length - 1;
    while (current > 0) {
      let parent = Math.floor((current - 1) / 2);
      if (this.heap[current] < this.heap[parent]) {
        this.swap(current, parent);
        current = parent;
      } else {
        break;
      }
    }
  }
  extractMin() {
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }
  heapifyDown() {
    let current = 0;
    while (true) {
      let smallest = current;
      let leftChild = 2 * current + 1;
      let rightChild = 2 * current + 2;
      if (
        leftChild < this.heap.length &&
        this.heap[leftChild] < this.heap[smallest]
      ) {
        smallest = leftChild;
      }
      if (
        rightChild < this.heap.length &&
        this.heap[rightChild] < this.heap[smallest]
      ) {
        smallest = rightChild;
      }
      if (smallest !== current) {
        this.swap(current, smallest);
        current = smallest;
      } else {
        break;
      }
    }
  }
  swap(current, parent) {
    const temp = this.heap[current];
    this.heap[current] = this.heap[parent];
    this.heap[parent] = temp;
  }
}
const heap = new MinHeap();
heap.insert(4);
heap.insert(8);
heap.insert(3);
heap.insert(5);
heap.insert(1);
console.log(heap.heap);
console.log(heap.extractMin());
console.log(heap.heap);
