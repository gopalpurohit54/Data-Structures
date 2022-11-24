interface IDeQueue {
  insertFront(val: number): boolean
  insertRear(val: number): boolean
  deleteFront(): any
  deleteRear(): any
}
export class DeQueue implements IDeQueue {
  private size: number
  private front: number
  private rear: number
  private queue: Array<number | null>

  constructor(size: number) {
    this.size = size
    this.queue = new Array(size).fill(null)
    this.front = this.rear = -1
  }

  isFull() {
    if ((this.rear + 1) % (this.size) === this.front) return true
    return false
  }

  isEmpty() {
    if (this.front === -1 || this.rear === -1) return true
    return false
  }

  insertFront(val: number): boolean {
    if (this.isFull()) return false
    if (this.front === -1) {
      this.front = this.rear = 0
    } else if (this.front === 0) {
      this.front = this.size - 1
    } else {
      this.front -= 1
    }
    this.queue[this.front] = val
    return true
  }

  insertRear(val: number): boolean {
    if (this.isFull()) return false

    if (this.rear === -1) {
      this.front = this.rear = 0
    } else {
      this.rear = (this.rear + 1) % this.size
    }
    this.queue[this.rear] = val
    return true
  }

  deleteFront(): any {
    if (this.isEmpty()) return null

    const deletedElement = this.queue[this.front]
    this.queue[this.front] = null
    
    if (this.front === this.rear) {
      this.front = this.rear = -1
    } else {
      this.front = (this.front + 1) % this.size
    }

    return deletedElement
  }

  deleteRear(): any {
    if (this.isEmpty()) return null
    
    const deletedElement = this.queue[this.rear]
    this.queue[this.rear] = null
    
    if (this.front === this.rear) {
      this.front = this.rear = -1
    } else if (this.rear === 0) {
      this.rear = this.size - 1
    } else {
      this.rear -= 1
    }
    
    return deletedElement
  }

}