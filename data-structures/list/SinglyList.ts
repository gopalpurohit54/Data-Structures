import { ITempNode, TempNode } from '../Node'

interface ISinglyList {
  push: (val: any) => ISinglyList
  pop: () => any
  shift: () => any
  unshift: (val: any) => ISinglyList
  get: (index: number) => any
  set: (index: number, val: any) => boolean
  insert: (index: number, val: any) => boolean
  remove: (index: number) => any
  reverse: () => void
}

export class SinglyList implements ISinglyList {
  private head: null | ITempNode
  private tail: null | ITempNode
  length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val: any): ISinglyList {
    const newNode = new TempNode(val)
    if (!this.head || !this.tail) {
      this.head = newNode
      this.tail = this.head
    } else {
      const prevTail = this.tail
      this.tail = newNode
      prevTail.next = this.tail
    }
    this.length++
    return this
  }

  pop() {
    if (!this.tail || !this.head) return undefined
    let currentTail = this.head
    let newTail = currentTail
    while (currentTail.next) {
      newTail = currentTail
      currentTail = currentTail.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.tail = this.head = null
    }
    return currentTail.val
  }

  shift() {
    if (!this.tail || !this.head) return undefined
    const currentHead = this.head
    this.head = currentHead.next
    this.length--
    if (this.length === 0) {
      this.tail = this.head = null
    }
    return currentHead.val
  }

  unshift(val: any): ISinglyList {
    const newNode = new TempNode(val)
    if (!this.head || !this.tail) {
      this.head = this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return null
    let counter = 0
    let current = this.head
    while (counter !== index) {
      current = (current as ITempNode).next
      counter++
    }
    return current
  }

  set(index: number, val: any) {
    const foundNode = this.get(index)
    if (foundNode) {
      foundNode.val = val
      return true
    }
    return false
  }

  insert(index: number, val: any) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) return !!this.push(val)
    if (index === 0) return !!this.unshift(val)

    const newNode = new TempNode(val);
    const prev = this.get(index - 1)
    newNode.next = prev!.next
    prev!.next = newNode
    this.length++
    return true
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    const prev = this.get(index - 1)
    const removed = prev!.next
    prev!.next = removed!.next
    return removed?.val
  }

  reverse() {
    let node = this.head
      this.head = this.tail
      this.tail = node
      let next
      let prev = null
      for(let i = 0; i < this.length; i++) {
        next = node!.next
        node!.next = prev
        prev = node
        node = next
      }
      return this
  }
}