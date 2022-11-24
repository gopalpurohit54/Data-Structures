interface IListNode {
  val: any
  prev: IListNode | null
  next: IListNode | null
}

class ListNode implements IListNode {
  val: any
  prev: IListNode | null
  next: IListNode | null

  constructor(val: any) {
    this.val = val
    this.prev = null
    this.next = null
  }
}

interface IDoublyList {
  length: number
  push: (val: any) => number
  pop: () => any
  shift: () => any
  unshift: (val: any) => number
  get: (index: number) => any
  set: (index: number, val: any) => boolean
  insert: (index: number, val: any) => boolean
  remove: (index: number) => any
}

export class DoublyList implements IDoublyList {
  private head: IListNode | null
  private tail: IListNode | null
  length: number

  constructor() {
    this.head = this.tail = null
    this.length = 0
  }

  push(val: any) {
    const newNode = new ListNode(val)
    if (!this.head || !this.tail) {
      this.head = this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
    return ++this.length
  }

  pop() {
    if (!this.head || !this.tail) return undefined
    const poppedNode = this.tail
    if (this.length === 1) {
      this.head = this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail!.next = null
      poppedNode.prev = null
    }
    this.length--
    return poppedNode
  }

  shift() {
    if (!this.head || !this.tail) return undefined
    const shiftedNode = this.head
    if (this.length === 1) {
      this.head = this.tail = null
    } else {
      this.head = shiftedNode.next
      this.head!.prev = null
      shiftedNode.next = null
    }
    this.length--
    return shiftedNode
  }

  unshift(val: any) {
    const newNode = new ListNode(val)
    if (!this.head || !this.tail) {
      this.head = this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    return ++this.length
  }


  get(index: number) {
    if (index < 0 || index > this.length) return null
    let current
    if (index < this.length / 2) {
      current = this.head
      for (let i = 1; i <= index; i++) {
        current = current!.next
      }
    } else {
      current = this.tail
      for (let i = this.length - 1; i > index; i--) {
        current = current!.prev
      }
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
    if (index === 0) return !!this.unshift(val)
    if (index === this.length) return !!this.push(val)

    const newNode = new ListNode(val)
    const beforeNode = this.get(index - 1)
    const afterNode = beforeNode!.next
    newNode.prev = beforeNode, newNode.next = afterNode
    beforeNode!.next = newNode, afterNode!.prev = afterNode
    this.length++
    return true
  }

  remove( index: number ) {
    if (index < 0 || index > this.length) return null
    if (index === 0) return this.shift()
    if (index === (this.length - 1)) return this.pop()
    console.log(this.length, index)
    const removedNode = this.get(index)
    const beforeNode = removedNode!.prev
    const afterNode = removedNode!.next
    beforeNode!.next = afterNode
    afterNode!.prev = beforeNode
    removedNode!.prev = removedNode!.next = null
    this.length--
    return removedNode
  }
}