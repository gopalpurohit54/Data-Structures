import { ITempNode, TempNode } from "../Node"

interface IStack {
  length: number
  push: (val: any) => number
  pop: () => any
}

export class Stack implements IStack{
  private top: ITempNode | null
  length: number
  constructor() {
    this.top = null
    this.length = 0
  }

  push(val: any) {
    const newNode = new TempNode(val)
    const secondTopElement = this.top
    this.top = newNode
    this.top.next = secondTopElement
    return ++this.length
  }

  pop() {
    if (this.top === null) return null
    const popedElement = this.top
    this.top = this.top.next
    this.length--
    return popedElement.val
  }
}