interface IHeap {
  insert(value: number): boolean
  delete(): any
  peek(): any
  isFull(): boolean
  isEmpty(): boolean
}

function minHeapify(arr: number[], size: number, i: number) {
  let smallest = i
  const leftNodeIndex = i * 2 + 1
  const rightNodeIndex = i * 2 + 2
  
  if (leftNodeIndex < size && arr[leftNodeIndex] < arr[smallest]) {
    smallest = leftNodeIndex
  }

  if (rightNodeIndex < size && arr[rightNodeIndex] < arr[smallest]) {
    smallest = rightNodeIndex
  }
  if (smallest !== i) {
    const temp = arr[smallest]
    arr[smallest] = arr[i]
    arr[i] = temp

    minHeapify(arr, size,smallest)
  }
}

export class MinHeap implements IHeap {
  private next: number
  private size: number
  private heap: number[]

  constructor(size: number) {
    this.size = size
    this.next = -1
    this.heap = []
  }

  isFull(): boolean {
    return (this.next + 1) === this.size
  }

  isEmpty(): boolean {
    return this.next === -1
  }

  insert(val: number): boolean {
    if (this.isFull()) return false

    this.heap.push(val)
    this.next++

    if (this.next === 0) {
        return true
    }

    for (let i = Math.floor((this.next + 1) / 2 - 1); i >= 0; i = Math.floor((i + 1) / 2 - 1)) {
      minHeapify(this.heap, this.next + 1, i)
    }
    return true
  }

  peek(): any {
    if (this.isEmpty()) return null
    return this.heap[0]
  }

  delete(): any {
    if (this.isEmpty()) return null

    const deletedElement = this.heap[0]
    const lastElement = this.heap.pop()
    if (this.next !== 0) {
      this.heap[0] = lastElement as any
    }
    this.next--
    minHeapify(this.heap, this.next + 1, 0)

    return deletedElement
  }
}