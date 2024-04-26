// file to implement the max heap and removing the top element

class MaxHeap {
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
      if (this.heap[current] > this.heap[parent]) {
        this.swap(current, parent);
        current = parent;
      } else {
        break;
      }
    }
  }
  extractMax() {
    let largest = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return largest;
  }
  heapifyDown() {
    let current = 0;
    while (true) {
      let leftChild = 2 * current + 1;
      let rightChild = 2 * current + 2;
      let largest = current;
      if (
        leftChild < this.heap.length &&
        this.heap[leftChild] < this.heap[largest]
      ) {
        largest = leftChild;
      }
      if (
        rightChild < this.heap.length &&
        this.heap[rightChild] < this.heap[largest]
      ) {
        largest = rightChild;
      }
      if (largest !== current) {
        this.swap(current, largest);
        largest = current;
      } else {
        break;
      }
    }
  }
  swap(current, parent) {
    let temp = this.heap[current];
    this.heap[current] = this.heap[parent];
    this.heap[parent] = temp;
  }
}

const heap = new MaxHeap();
heap.insert(3);
heap.insert(8);
heap.insert(4);
heap.insert(1);
heap.insert(9);
console.log(heap.heap);
console.log(heap.extractMax());
console.log(heap.heap);
