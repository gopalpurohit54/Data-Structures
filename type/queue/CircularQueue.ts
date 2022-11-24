interface ICircularQueue {
  enqueue: (value: any) => boolean
  dequeue: () => any
}

export class CircularQueue implements ICircularQueue{
  private queue: any[]
  private first: number
  private last: number
  private size: number
  constructor(size: number) {
    this.size = size
    this.first = this.last = -1
    this.queue = new Array(size)
  }

  enqueue(value: any): boolean {
    // Check is queue is full
    if ((this.last + 1) % (this.size) === this.first) {
      console.log('Queue is full')
      return false
    }
    this.last = (this.last + 1) % (this.size)
    this.queue[this.last] = value
    if (this.first === -1) this.first = 0
    return true
  }

  dequeue() {
    // Check if queue is empty
    if (this.first === -1) {
      console.log("Queue is empty")
      return
    }
    const removedElement = this.queue[this.first]
    
    if (this.first === this.last) {
      this.first = this.last = -1
    } else {
      this.first = (this.first + 1) % this.size
    }
    return removedElement
  }
}