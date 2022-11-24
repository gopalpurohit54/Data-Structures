import { ITempNode, TempNode } from '../Node'

interface IQueue {
  enqueue: (val: any) => number
  dequeue: () => any
  length: number
}

export class Queue implements IQueue {
  private first: null | ITempNode
  private last: null | ITempNode
  length: number

  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  enqueue(val: any) {
    const newNode = new TempNode(val)
    if (!this.first || !this.last) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    return ++this.length
  }

  dequeue() {
    if (!this.first) return null
    const firstNode = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.length--
    return firstNode.val
  }
}