class MaxHeap {
  constructor() {
    this.heap = [];
  }
  print() {
    console.log(this.heap);
  }
  swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
    return;
  }

  empty() {
    if (this.heap.length == 0) {
      return true;
    }
    return false;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.heap[parentIndex] >= this.heap[currentIndex]) break;
      this.swap(this.heap, parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }

  extractMax() {
    if (this.heap.length == 1) {
      return this.heap.pop();
    }
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);

    return max;
  }

  sinkDown(index) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    const length = this.heap.length;
    let largestIndex = index;

    if (leftIndex < length && this.heap[leftIndex] > this.heap[largestIndex]) {
      largestIndex = leftIndex;
    }

    if (
      rightIndex < length &&
      this.heap[rightIndex] > this.heap[largestIndex]
    ) {
      largestIndex = rightIndex;
    }

    if (largestIndex !== index) {
      this.swap(this.heap, largestIndex, index);
      this.sinkDown(largestIndex);
    }
  }
}

const maxHeap = new MaxHeap();
maxHeap.insert(3);
maxHeap.insert(2);
maxHeap.insert(1);
maxHeap.print();
console.log(maxHeap.extractMax());
maxHeap.print();
console.log(maxHeap.extractMax());
maxHeap.print();
console.log(maxHeap.extractMax());
maxHeap.print();
