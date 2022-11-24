export interface ITempNode {
  val: any
  next: null | ITempNode
}

export class TempNode implements ITempNode {
  val: any
  next: null | ITempNode

  constructor(val: any) {
    this.val = val
    this.next = null
  }
}